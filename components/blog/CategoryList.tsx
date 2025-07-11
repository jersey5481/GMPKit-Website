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
    const categories = await client.fetch(`*[_type == "category" && (includeInNavigation == true || includeInNavigation == null)] | order(title asc) {
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

export default async function CategoryList() {
  const categories = await getCategories();
  
  if (!categories || categories.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={`/blog/category/${encodeURIComponent(category.title)}`}
            className="bg-muted hover:bg-muted/80 text-sm px-3 py-1.5 rounded-md transition-colors"
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
