export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short description of the blog post'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
      description: 'Add relevant tags to help categorize your content',
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Mark this post to appear in featured sections',
      initialValue: false,
    },
    {
      name: 'includeInFeed',
      title: 'Include in Feed',
      type: 'boolean',
      description: 'If true, post appears in the main feed. If false, post is excluded from the feed but still accessible directly.',
      initialValue: true,
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{type: 'reference', to: {type: 'author'}}],
      description: 'Select one or more authors for this post',
      validation: Rule => Rule.required().min(1).error('At least one author is required')
    },
    {
      name: 'author',
      title: 'Primary Author (Legacy)',
      type: 'reference',
      to: {type: 'author'},
      description: 'Legacy field for backward compatibility. Please use the Authors field above.',
      hidden: true
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility',
              options: {
                isHighlighted: true
              }
            }
          ]
        },
        {
          type: 'youtube'
        },
        {
          type: 'vimeo'
        },
        {
          type: 'video'
        },
        {
          type: 'code',
          title: 'Code Block',
          options: {
            withFilename: true,
          }
        },
        {
          type: 'callout',
          title: 'Callout Block'
        }
      ]
    },
    {
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
      description: 'Select posts that are related to this one',
      validation: Rule => Rule.unique().max(3)
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      description: 'Search engine optimization settings',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Override the default title (70 characters max)',
          validation: Rule => Rule.max(70)
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Description for search engines (160 characters max)',
          validation: Rule => Rule.max(160)
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Add keywords that describe your post',
          options: {
            layout: 'tags'
          }
        },
        {
          name: 'socialImage',
          title: 'Social Media Image',
          type: 'image',
          description: 'Image used when sharing on social media (1200x630px recommended)',
          options: {
            hotspot: true
          }
        }
      ]
    }
  ],

  preview: {
    select: {
      title: 'title',
      authors: 'authors',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {authors, author} = selection
      // Use authors array if available, otherwise fall back to legacy author field
      const authorsText = authors && authors.length > 0 
        ? `by ${authors.map(author => author.name).join(', ')}` 
        : author && `by ${author}`
      
      return Object.assign({}, selection, {
        subtitle: authorsText,
      })
    },
  },
}
