export default {
  name: 'code',
  title: 'Code',
  type: 'object',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'SCSS', value: 'scss' },
          { title: 'JSON', value: 'json' },
          { title: 'Python', value: 'python' },
          { title: 'Bash', value: 'bash' },
          { title: 'C#', value: 'csharp' },
          { title: 'Java', value: 'java' },
          { title: 'PHP', value: 'php' },
          { title: 'Ruby', value: 'ruby' },
          { title: 'Go', value: 'go' },
          { title: 'SQL', value: 'sql' },
          { title: 'YAML', value: 'yaml' },
          { title: 'Markdown', value: 'markdown' },
          { title: 'Plain text', value: 'text' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'filename',
      title: 'Filename',
      type: 'string',
      description: 'Optional filename to display above the code block'
    },
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      language: 'language',
      filename: 'filename',
      code: 'code'
    },
    prepare({ language, filename, code }) {
      const firstLine = code?.split('\n')[0]?.substring(0, 30) || '';
      const preview = firstLine + (firstLine.length > 30 ? '...' : '');
      
      return {
        title: filename || language || 'Code snippet',
        subtitle: language ? `Language: ${language} - ${preview}` : preview
      };
    }
  }
}
