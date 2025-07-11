import Link from 'next/link';
import { getClient } from '@/lib/sanity';

interface Category {
  title: string;
  description?: string;
  includeInNavigation?: boolean;
}

async function getCategories(): Promise<Category[]> {
  const client = getClient();
  
  try {
    // Only fetch categories where includeInNavigation is explicitly true
    const categories = await client.fetch(`*[_type == "category" && includeInNavigation == true] | order(title asc) {
      title,
      description,
      includeInNavigation
    }`);
    
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function BlogNavCards() {
  const categories = await getCategories();
  
  if (!categories || categories.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={`/blog/category/${encodeURIComponent(category.title)}`}
            className="group"
          >
            <div className="border rounded-lg p-6 bg-gradient-to-br from-[#7ED957]/10 to-[#7ED957]/5 hover:from-[#7ED957]/15 hover:to-[#7ED957]/10 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[#7ED957]/50 h-full">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {category.title}
              </h3>
              {category.description && (
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {category.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
