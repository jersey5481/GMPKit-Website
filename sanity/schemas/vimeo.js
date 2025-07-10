export default {
  name: 'vimeo',
  type: 'object',
  title: 'Vimeo Embed',
  fields: [
    {
      name: 'videoId',
      type: 'string',
      title: 'Vimeo Video ID',
      description: 'Enter the Vimeo video ID (e.g., 123456789 from https://vimeo.com/123456789)',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Video Title',
      description: 'Optional title to display above the video'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Video Description',
      description: 'Optional description to display below the video'
    }
  ],
  preview: {
    select: {
      title: 'title',
      videoId: 'videoId'
    },
    prepare({ title, videoId }) {
      return {
        title: title || `Vimeo Video: ${videoId}`,
      };
    }
  }
}
