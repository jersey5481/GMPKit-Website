export default {
  name: 'callout',
  title: 'Callout',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Warning', value: 'warning' },
          { title: 'Tip', value: 'tip' },
          { title: 'Note', value: 'note' }
        ],
        layout: 'radio'
      },
      initialValue: 'info'
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Optional heading for the callout'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      title: 'heading',
      type: 'type'
    },
    prepare({ title, type }) {
      return {
        title: title || 'Callout',
        subtitle: `${type.charAt(0).toUpperCase() + type.slice(1)} callout`
      }
    }
  }
}
