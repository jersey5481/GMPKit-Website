# How to Add YouTube Videos to Your Blog Posts

This guide shows you how to add YouTube videos to your blog posts using Sanity Studio.

## Step 1: Open Your Blog Post in Sanity Studio

Navigate to your Sanity Studio (typically at `http://localhost:3333`) and either create a new blog post or edit an existing one.

## Step 2: Position Your Cursor

Click where you want to insert the YouTube video in your content editor.

## Step 3: Add a YouTube Video Block

1. Click the "+" button that appears in the editor
2. Select "YouTube Embed" from the menu

![Add YouTube Video](https://i.imgur.com/example1.png)

## Step 4: Enter the YouTube Video ID

1. Find the YouTube video you want to embed
2. Copy the video ID from the URL
   - Example: In `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the ID is `dQw4w9WgXcQ`
3. Paste this ID into the "YouTube Video ID" field
4. Optionally add a title and description

![Enter YouTube ID](https://i.imgur.com/example2.png)

## Step 5: Save Your Changes

Click "Publish" to save your blog post with the embedded YouTube video.

## Step 6: View Your Blog Post

Visit your blog post on your website to see the embedded YouTube video. It will be responsive and properly styled.

## Example

Here's how a YouTube video looks when embedded in your blog:

```jsx
// This is what happens behind the scenes
<div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="absolute top-0 left-0 w-full h-full"
  />
</div>
```

## Troubleshooting

If your video doesn't appear:
1. Make sure you entered the correct video ID
2. Check that the YouTube video is public or unlisted (not private)
3. Restart your development server if needed

## Additional Options

You can also:
- Add a title above the video
- Add a description below the video
- Adjust the position of the video in your content by dragging it up or down
