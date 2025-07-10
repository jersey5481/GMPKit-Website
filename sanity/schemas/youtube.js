export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'videoId',
      type: 'string',
      title: 'YouTube Video ID',
      description: 'Enter the YouTube video ID (e.g., dQw4w9WgXcQ from https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
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
        title: title || `YouTube Video: ${videoId}`,
        subtitle: `Video ID: ${videoId}`
      };
    }
  }
}
