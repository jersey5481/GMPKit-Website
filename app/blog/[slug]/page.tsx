import { getClient } from '@/lib/sanity';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import YouTubeEmbed from '@/components/blog/YouTubeEmbed';
import VimeoEmbed from '@/components/blog/VimeoEmbed';
import VideoPlayer from '@/components/blog/VideoPlayer';
import Callout from '@/app/components/Callout';

export const revalidate = 60; // Revalidate this page every 60 seconds

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Ensure params is properly awaited in Next.js 15
  const resolvedParams = await Promise.resolve(params);
  const post = await getPost(resolvedParams.slug);
  
  // Use SEO fields if available, otherwise fall back to defaults
  const title = post?.seo?.metaTitle || post?.title || 'Blog Post';
  const description = post?.seo?.metaDescription || post?.excerpt || 'Read this insightful article from GMPKit on batch manufacturing operations.';
  
  const metadata: Metadata = {
    title: `${title} | GMPKit`,
    description: description,
  };
  
  // Add keywords if available
  if (post?.seo?.keywords && post.seo.keywords.length > 0) {
    metadata.keywords = post.seo.keywords;
  }
  
  // Add OpenGraph metadata
  metadata.openGraph = {
    title: title,
    description: description,
    type: 'article',
    url: `https://gmpkit.com/blog/${post?.slug?.current || params.slug}`,
    images: post?.seo?.socialImage ? 
      [{ url: urlFor(post.seo.socialImage).url(), width: 1200, height: 630, alt: title }] : 
      (post?.mainImage ? 
        [{ url: urlFor(post.mainImage).url(), width: 1200, height: 630, alt: title }] : 
        [])
  };
  
  return metadata;
}

interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

interface Author {
  name: string;
  image?: SanityImage;
  bio?: any;
  slug?: { current: string };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImage;
  content?: any;
  categories?: string[];
  tags?: string[];
  featured?: boolean;
  author?: Author; // Legacy field
  authors?: Author[]; // New field for multiple authors
  relatedPosts?: Post[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    socialImage?: SanityImage;
  };
}

// Define the components for the PortableText renderer
const components: Partial<import('@portabletext/react').PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full h-96 my-8">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || 'Blog image'}
          fill
          className="object-contain"
        />
      </div>
    ),
    callout: ({ value }: any) => (
      <Callout value={value} />
    ),
    youtube: ({ value }: any) => (
      <YouTubeEmbed 
        videoId={value.videoId} 
        title={value.title} 
        description={value.description} 
      />
    ),
    vimeo: ({ value }: any) => (
      <VimeoEmbed 
        videoId={value.videoId} 
        title={value.title} 
        description={value.description} 
      />
    ),
    video: ({ value }: any) => {
      // Handle generic video files
      const videoUrl = value.asset ? urlFor(value.asset).url() : value.url;
      const posterUrl = value.poster ? urlFor(value.poster).url() : undefined;
      
      return (
        <VideoPlayer 
          videoUrl={videoUrl} 
          posterUrl={posterUrl} 
          title={value.title} 
          caption={value.caption} 
        />
      );
    },
    code: ({ value }: any) => (
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md overflow-x-auto my-4">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value?.href?.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <Link href={value?.href || '#'} rel={rel} className="text-primary hover:underline font-medium">
          {children}
        </Link>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => <code className="bg-gray-100 dark:bg-gray-900 px-1 py-0.5 rounded">{children}</code>,
  },
};

async function getPost(slug: string): Promise<Post | null> {
  const client = getClient();
  try {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        mainImage,
        content,
        featured,
        "categories": categories[]->title,
        "tags": tags[]->title,
        "author": author->{name, image, bio, slug},
        "authors": authors[]->{name, image, bio, slug},
        "relatedPosts": relatedPosts[]->{
          _id,
          title,
          slug,
          publishedAt,
          excerpt,
          mainImage,
          "author": author->name,
          "authors": authors[]->name
        },
        seo
      }`,
      { slug }
    );
    return post || null;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

export async function generateStaticParams() {
  const client = getClient();
  try {
    const posts = await client.fetch(`*[_type == "post"]{slug}`);
    
    return posts.map((post: { slug: { current: string } }) => ({
      slug: post.slug.current,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Ensure params is properly awaited in Next.js 15
  const resolvedParams = await Promise.resolve(params);
  const post: Post | null = await getPost(resolvedParams.slug);
  
  if (!post) {
    return (
      <PageLayout currentPage="blog">
        <div className="container mx-auto px-4 py-12">Post not found</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout currentPage="blog">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Button variant="ghost" size="sm" className="mb-6 flex items-center gap-2" asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </Link>
        </Button>
      
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      <div className="flex items-center mb-8">
        <div className="text-gray-600">
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          {post.authors && post.authors.length > 0
            ? ` • By ${post.authors.map(author => author.name).join(', ')}`
            : post.author && ` • By ${post.author.name}`
          }
        </div>
      </div>
      
      {post.mainImage && (
        <div className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}
      
      {/* Categories and Tags */}
      <div className="mb-8 flex flex-wrap gap-2">
        {post.categories && post.categories.length > 0 && 
          post.categories.map((category: string) => (
            <span
              key={`category-${category}`}
              className="bg-primary/10 text-primary-foreground px-3 py-1 rounded-full"
            >
              {category}
            </span>
          ))
        }
        {post.tags && post.tags.length > 0 && 
          post.tags.map((tag: string) => (
            <span
              key={`tag-${tag}`}
              className="bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))
        }
      </div>
      
      <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-a:text-primary prose-img:rounded-lg prose-img:my-8 prose-p:leading-relaxed prose-p:mb-4 prose-li:my-1">
        <PortableText value={post.content} components={components} />
      </div>
      
      {/* Display authors section */}
      {post.authors && post.authors.length > 0 ? (
        <div className="mt-16 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">{post.authors.length > 1 ? 'About the Authors' : 'About the Author'}</h2>
          <div className="space-y-8">
            {post.authors.map((author, index) => (
              <div key={index} className="flex items-start">
                {author.image && (
                  <div className="flex-shrink-0 mr-4">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden">
                      <Image
                        src={urlFor(author.image).url()}
                        alt={author.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold">{author.name}</h3>
                  {author.bio && (
                    <div className="mt-2 text-gray-700">
                      <PortableText value={author.bio} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : post.author && (
        <div className="mt-16 border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <div className="flex items-start">
            {post.author.image && (
              <div className="flex-shrink-0 mr-4">
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                  <Image
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold">{post.author.name}</h3>
              {post.author.bio && (
                <div className="mt-2 text-gray-700">
                  <PortableText value={post.author.bio} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Related Posts Section */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <div className="mt-16 border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {post.relatedPosts.map((relatedPost) => (
              <Link href={`/blog/${relatedPost.slug.current}`} key={relatedPost._id} className="group">
                <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50 bg-card">
                  {relatedPost.mainImage && (
                    <div className="relative h-40 w-full">
                      <Image
                        src={urlFor(relatedPost.mainImage).url()}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {new Date(relatedPost.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                      {relatedPost.authors && relatedPost.authors.length > 0
                        ? ` • By ${relatedPost.authors.join(', ')}`
                        : relatedPost.author && ` • By ${relatedPost.author}`
                      }
                    </p>
                    {relatedPost.excerpt && (
                      <p className="text-gray-700 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
    </PageLayout>
  );
}
