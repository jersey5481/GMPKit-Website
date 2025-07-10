import { getClient } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import PageLayout from '@/components/layout/PageLayout';
import { Metadata } from 'next';

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
  author?: string;
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
      "categories": categories[]->title,
      "author": author->name
    }`);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <PageLayout currentPage="blog">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">Insights, updates, and best practices for batch manufacturing operations</p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: Post) => (
              <Link href={`/blog/${post.slug.current}`} key={post._id} className="group">
                <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/50 bg-card">
                  {post.mainImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
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
                      {post.author && ` • By ${post.author}`}
                    </p>
                    {post.excerpt && (
                      <p className="text-gray-700 line-clamp-3">{post.excerpt}</p>
                    )}
                    {post.categories && post.categories.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.categories.map((category: string) => (
                          <span
                            key={category}
                            className="bg-primary/10 text-primary-foreground text-xs px-2 py-1 rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <h2 className="text-2xl font-medium mb-4">No blog posts found</h2>
            <p className="text-muted-foreground">Check back soon for new content!</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
