// Future blog functionality
export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  publishedAt: string
  updatedAt?: string
  author: string
  tags: string[]
  category: string
  featured?: boolean
  image?: string
}

export function generateBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image || "https://www.gmpkit.com/images/gmpkit-og-image.png",
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "GMPKit, LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://www.gmpkit.com/gmpkit-logo.svg",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.gmpkit.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  }
}

export function generateBlogListingSchema(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "GMPKit Blog",
    description: "Insights on batch manufacturing, LEAN principles, and operational excellence",
    url: "https://www.gmpkit.com/blog",
    publisher: {
      "@type": "Organization",
      name: "GMPKit, LLC",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://www.gmpkit.com/blog/${post.slug}`,
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author,
      },
    })),
  }
}
