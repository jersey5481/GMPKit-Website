import Link from 'next/link';

export default function BlogNavLink() {
  return (
    <Link 
      href="/blog" 
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      Blog
    </Link>
  );
}
