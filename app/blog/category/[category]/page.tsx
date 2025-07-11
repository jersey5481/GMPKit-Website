import { getClient } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import PageLayout from '@/components/layout/PageLayout';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
  includeInFeed?: boolean; // Added based on memory
}

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Get category details for metadata
async function getCategoryForMetadata(categoryParam: string) {
  const client = getClient();
  const decodedCategory = decodeURIComponent(categoryParam);
  
  try {
    return await client.fetch(`*[_type == "category" && (title == $category || slug.current == $category)][0] {
      title,
      description
    }`, { category: decodedCategory });
  } catch (error) {
    console.error('Error fetching category for metadata:', error);
    return null;
  }
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: CategoryPageProps
): Promise<Metadata> {
  // In Next.js App Router, we need to properly handle dynamic params
  const categoryParam = params.category;
  const category = await getCategoryForMetadata(categoryParam);
  
  const title = category?.title || decodeURIComponent(categoryParam);
  
  return {
    title: `${title} | Blog | GMPKit`,
    description: category?.description || `Browse all articles in the ${title} category on GMPKit's blog.`,
  };
}

// Get all categories for static paths
export async function generateStaticParams() {
  const client = getClient();
  
  try {
    const categories = await client.fetch(`*[_type == "category"] {
      "slug": title
    }`);
    
    return categories.map((category: { slug: string }) => ({
      category: encodeURIComponent(category.slug),
    }));
  } catch (error) {
    console.error('Error generating static paths:', error);
    return [];
  }
}

// Get posts by category
async function getPostsByCategory(categoryParam: string): Promise<Post[]> {
  const client = getClient();
  const decodedCategory = decodeURIComponent(categoryParam);
  
  try {
    return await client.fetch(`*[_type == "post" && ($category in categories[]->title || $category in categories[]->slug.current)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      featured,
      includeInFeed,
      "categories": categories[]->title,
      "tags": tags[]->title,
      "author": author->name,
      "authors": authors[]->name
    }`, { category: decodedCategory });
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

// Get category details
async function getCategoryDetails(categoryParam: string) {
  const client = getClient();
  const decodedCategory = decodeURIComponent(categoryParam);
  
  try {
    return await client.fetch(`*[_type == "category" && (title == $category || slug.current == $category)][0] {
      title,
      description,
      slug,
      includeInNavigation
    }`, { category: decodedCategory });
  } catch (error) {
    console.error('Error fetching category details:', error);
    return null;
  }
}

export default async function CategoryPage(
  { params }: CategoryPageProps
) {
  // Get the category parameter directly without awaiting it
  const categoryParam = params.category;
  
  // Use the parameter in async functions
  const posts = await getPostsByCategory(categoryParam);
  const categoryDetails = await getCategoryDetails(categoryParam);
  
  // If category doesn't exist, return 404
  if (!categoryDetails) {
    notFound();
  }
  
  // Decode the category for display
  const decodedCategory = categoryDetails.title || decodeURIComponent(categoryParam);
  
  // Filter posts that should be included in feed (based on memory)
  const displayPosts = posts.filter(post => post.includeInFeed !== false);
  
  return (
    <PageLayout currentPage="blog">
      <section className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <span>{decodedCategory}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{decodedCategory}</h1>
          {categoryDetails.description && (
            <p className="text-lg text-muted-foreground max-w-2xl">{categoryDetails.description}</p>
          )}
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        {displayPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post: Post, index: number) => (
              <Link href={`/blog/${post.slug.current}`} key={post._id} className="group">
                <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-primary/50 bg-card h-full">
                  {post.mainImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        priority={index < 3}
                        className="object-cover"
                      />
                      {post.featured && (
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md font-medium">
                          Featured
                        </div>
                      )}
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
                          <Link
                            href={`/blog/category/${encodeURIComponent(category)}`}
                            key={`category-${category}`}
                            className="bg-primary/10 text-primary-foreground text-xs px-2 py-1 rounded-full hover:bg-primary/20 transition-colors"
                          >
                            {category}
                          </Link>
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
        ) : (
          <div className="py-12 text-center">
            <h2 className="text-2xl font-medium mb-4">No posts found in this category</h2>
            <p className="text-muted-foreground mb-6">Check back soon for new content!</p>
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Back to Blog
            </Link>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
