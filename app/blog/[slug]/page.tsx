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
import { notFound } from 'next/navigation';

export const revalidate = 60; // Revalidate this page every 60 seconds

// Define interfaces
interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  _ref?: string;
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
  includeInFeed?: boolean;
  author?: Author;
  authors?: Author[];
  relatedPosts?: Post[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    socialImage?: SanityImage;
  };
}

// Define the components for the PortableText renderer
const components = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog post image'}
            width={800}
            height={500}
            className="rounded-lg mx-auto"
          />
          {value.caption && <p className="text-center text-sm text-gray-500 mt-2">{value.caption}</p>}
        </div>
      );
    },
    callout: ({ value }: any) => {
      return <Callout type={value.type}>{value.text}</Callout>;
    },
    youtube: ({ value }: any) => {
      if (!value?.url) return null;
      return (
        <div className="my-8">
          <YouTubeEmbed url={value.url} title={value.title || 'YouTube video'} />
          {value.caption && <p className="text-center text-sm text-gray-500 mt-2">{value.caption}</p>}
        </div>
      );
    },
    vimeo: ({ value }: any) => {
      if (!value?.url) return null;
      return (
        <div className="my-8">
          <VimeoEmbed url={value.url} title={value.title || 'Vimeo video'} />
          {value.caption && <p className="text-center text-sm text-gray-500 mt-2">{value.caption}</p>}
        </div>
      );
    },
    video: ({ value }: any) => {
      if (!value?.asset) return null;
      
      const videoUrl = urlFor(value.asset).url();
      let posterUrl = '';
      
      if (value.poster && value.poster.asset) {
        posterUrl = urlFor(value.poster).url();
      }
      
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
    h1: ({ children }: any) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
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
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => <code className="bg-gray-100 dark:bg-gray-900 px-1 py-0.5 rounded">{children}</code>,
  },
};

// Function to get post data
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
        includeInFeed,
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

// Generate static params for all posts
export async function generateStaticParams() {
  try {
    const client = getClient();
    const posts = await client.fetch(`*[_type == "post"] { slug }`);
    
    return posts.map((post: { slug: { current: string } }) => ({
      slug: post.slug.current,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Metadata generation function
export async function generateMetadata(props: { params: { slug: string } }): Promise<Metadata> {
  // Extract the slug from params
  const slug = props.params.slug;
  
  // Get post data
  const post = await getPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | GMPKit',
      description: 'The requested blog post could not be found.',
    };
  }
  
  // Use SEO fields if available, otherwise fall back to defaults
  const title = post.seo?.metaTitle || post.title || 'Blog Post';
  const description = post.seo?.metaDescription || post.excerpt || 'Read this insightful article from GMPKit on batch manufacturing operations.';
  
  return {
    title: `${title} | GMPKit`,
    description: description,
    keywords: post.seo?.keywords || undefined,
    openGraph: {
      title: title,
      description: description,
      type: 'article',
      url: `https://gmpkit.com/blog/${post.slug?.current || slug}`,
      images: post.seo?.socialImage ? 
        [{ url: urlFor(post.seo.socialImage).url(), width: 1200, height: 630, alt: title }] : 
        (post.mainImage ? 
          [{ url: urlFor(post.mainImage).url(), width: 1200, height: 630, alt: title }] : 
          [])
    }
  };
}

// Main blog post component
export default async function BlogPost(props: { params: { slug: string } }) {
  // Extract the slug from params
  const slug = props.params.slug;
  
  // Get post data
  const post = await getPost(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <PageLayout currentPage="blog">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Button variant="ghost" size="sm" className="mb-6 flex items-center gap-2" asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </Link>
        </Button>

        {post.mainImage && (
          <div className="mb-8">
            <Image
              src={urlFor(post.mainImage).width(1200).height(630).url()}
              alt={post.title}
              width={1200}
              height={630}
              className="rounded-lg w-full h-auto"
              priority
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
          {post.publishedAt && (
            <time dateTime={new Date(post.publishedAt).toISOString()}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
          
          {post.author && (
            <div className="flex items-center">
              {post.author.image && (
                <div className="mr-2">
                  <Image
                    src={urlFor(post.author.image).width(40).height(40).url()}
                    alt={post.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
              )}
              <span>By {post.author.name}</span>
            </div>
          )}
          
          {post.authors && post.authors.length > 0 && !post.author && (
            <div className="flex items-center">
              <span>By {post.authors.map(author => author.name).join(', ')}</span>
            </div>
          )}
          
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category: string) => (
                <Link 
                  href={`/blog/category/${encodeURIComponent(category)}`} 
                  key={`category-${category}`}
                  className="bg-primary/10 text-primary-foreground text-xs px-2 py-1 rounded-full hover:bg-primary/20"
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>

        {post.excerpt && (
          <div className="mb-8 text-lg font-medium text-muted-foreground italic border-l-4 border-primary pl-4 py-2">
            {post.excerpt}
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content && <PortableText value={post.content} components={components} />}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t">
            <h3 className="text-lg font-medium mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span key={`tag-${tag}`} className="bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-12 pt-6 border-t">
            <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Link 
                  href={`/blog/${relatedPost.slug.current}`} 
                  key={relatedPost._id}
                  className="group block"
                >
                  <div className="border rounded-lg overflow-hidden transition-all group-hover:shadow-md">
                    {relatedPost.mainImage && (
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={urlFor(relatedPost.mainImage).width(600).height(340).url()}
                          alt={relatedPost.title}
                          width={600}
                          height={340}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      {relatedPost.excerpt && (
                        <p className="text-muted-foreground text-sm line-clamp-2">{relatedPost.excerpt}</p>
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
