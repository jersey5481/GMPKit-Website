export default {
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Optional title to display above the video'
    },
    {
      name: 'asset',
      type: 'file',
      title: 'Video File',
      description: 'Upload a video file',
      options: {
        accept: 'video/*'
      }
    },
    {
      name: 'url',
      type: 'url',
      title: 'External Video URL',
      description: 'Or provide a URL to an external video file (used if no file is uploaded)'
    },
    {
      name: 'poster',
      type: 'image',
      title: 'Poster Image',
      description: 'Optional thumbnail image to show before the video plays'
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      description: 'Optional caption to display below the video'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'poster'
    },
    prepare({ title, media }) {
      return {
        title: title || 'Video',
        media: media
      };
    }
  }
}
