import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';

export default function CategoryNotFound() {
  return (
    <PageLayout currentPage="blog">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Category Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The category you're looking for doesn't exist or may have been removed.
          </p>
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
