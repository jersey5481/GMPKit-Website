export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The name of your site',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'A short description of your site for SEO purposes',
      validation: Rule => Rule.max(160)
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      description: 'Global SEO settings for the website',
      fields: [
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Global keywords for your website',
          options: {
            layout: 'tags'
          },
          initialValue: [
            'Operations Leadership Development Program',
            'LEAN Manufacturing Software',
            'GMP Performance',
            'GMP Consultants',
            'Batch Tracking System'
          ]
        },
        {
          name: 'defaultSocialImage',
          title: 'Default Social Media Image',
          type: 'image',
          description: 'Default image used when sharing on social media (1200x630px recommended)',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'mainNavigation',
      title: 'Main Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title'
            },
            {
              name: 'link',
              type: 'string',
              title: 'Link'
            }
          ]
        }
      ],
      description: 'Configure the main navigation links'
    }
  ]
}
