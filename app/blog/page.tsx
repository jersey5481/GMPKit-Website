import { getClient } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import PageLayout from '@/components/layout/PageLayout';
import { Metadata } from 'next';
import CategoryList from '@/components/blog/CategoryList';

export const metadata: Metadata = {
  title: 'Blog | GMPKit',
  description: 'Read the latest articles, insights, and updates from GMPKit on batch manufacturing, GMP compliance, and industry best practices.',
};

export const revalidate = 60; // Revalidate this page every 60 seconds

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: any; // Sanity image type
  categories?: string[];
  tags?: string[];
  featured?: boolean;
  author?: string; // Legacy field
  authors?: string[]; // New field for multiple authors
}

async function getPosts(): Promise<Post[]> {
  const client = getClient();
  try {
    return await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      featured,
      "categories": categories[]->title,
      "tags": tags[]->title,
      "author": author->name,
      "authors": authors[]->name
    }`);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();
  
  // Separate featured posts from regular posts
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);
  
  return (
    <PageLayout currentPage="blog">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">Insights, updates, and best practices for batch manufacturing operations</p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Featured Posts Section */}
            {featuredPosts.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredPosts.slice(0, 2).map((post: Post) => (
                    <Link href={`/blog/${post.slug.current}`} key={post._id} className="group">
                      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/50 bg-card h-full">
                        <div className="flex flex-col h-full">
                          {post.mainImage && (
                            <div className="relative h-64 w-full">
                              <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                fill
                                priority
                                className="object-cover"
                              />
                              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md font-medium">
                                Featured
                              </div>
                            </div>
                          )}
                          <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                              {post.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-4">
                              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                              {post.authors && post.authors.length > 0 
                                ? ` • By ${post.authors.join(', ')}` 
                                : post.author && ` • By ${post.author}`}
                            </p>
                            {post.excerpt && (
                              <p className="text-gray-700 line-clamp-3 mb-4">{post.excerpt}</p>
                            )}
                            <div className="mt-auto flex flex-wrap gap-2">
                              {post.categories && post.categories.length > 0 && 
                                post.categories.map((category: string) => (
                                  <span
                                    key={`category-${category}`}
                                    className="bg-primary/10 text-primary-foreground text-xs px-2 py-1 rounded-full"
                                  >
                                    {category}
                                  </span>
                                ))
                              }
                              {post.tags && post.tags.length > 0 && 
                                post.tags.map((tag: string) => (
                                  <span
                                    key={`tag-${tag}`}
                                    className="bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full"
                                  >
                                    #{tag}
                                  </span>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Regular Posts Section */}
            {regularPosts.length > 0 ? (
              <div>
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">All Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post: Post, index: number) => (
                    <Link href={`/blog/${post.slug.current}`} key={post._id} className="group">
                      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/50 bg-card h-full">
                        {post.mainImage && (
                          <div className="relative h-48 w-full">
                            <Image
                              src={urlFor(post.mainImage).url()}
                              alt={post.title}
                              fill
                              priority={index === 0}
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 text-sm mb-4">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                            {post.authors && post.authors.length > 0 
                              ? ` • By ${post.authors.join(', ')}` 
                              : post.author && ` • By ${post.author}`}
                          </p>
                          {post.excerpt && (
                            <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                          )}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {post.categories && post.categories.length > 0 && 
                              post.categories.map((category: string) => (
                                <span
                                  key={`category-${category}`}
                                  className="bg-primary/10 text-primary-foreground text-xs px-2 py-1 rounded-full"
                                >
                                  {category}
                                </span>
                              ))
                            }
                            {post.tags && post.tags.length > 0 && 
                              post.tags.slice(0, 2).map((tag: string) => (
                                <span
                                  key={`tag-${tag}`}
                                  className="bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full"
                                >
                                  #{tag}
                                </span>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="py-12 text-center">
                <h2 className="text-2xl font-medium mb-4">No blog posts found</h2>
                <p className="text-muted-foreground">Check back soon for new content!</p>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4 mt-8 lg:mt-0">
            <div className="border rounded-lg p-6 bg-card sticky top-24">
              {/* CategoryList is an async server component */}
              <CategoryList />
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">About the Blog</h3>
                <p className="text-muted-foreground text-sm">
                  Stay updated with the latest insights, best practices, and industry news for batch manufacturing operations and GMP compliance.  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
