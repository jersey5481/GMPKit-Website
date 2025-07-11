# Practical Example: Adding a YouTube Video to Your Blog

## Example: Adding a TailwindCSS Tutorial Video

Let's say you want to add a TailwindCSS tutorial video to your blog post about styling. Here's how to do it:

### Step 1: Find the YouTube Video

For this example, let's use a popular TailwindCSS tutorial: "Tailwind CSS Full Course for Beginners" by Dave Gray.
URL: https://www.youtube.com/watch?v=lCxcTsOHrjo

### Step 2: Extract the Video ID

From the URL `https://www.youtube.com/watch?v=lCxcTsOHrjo`, the video ID is:
```
lCxcTsOHrjo
```

### Step 3: In Sanity Studio

1. Open your blog post in Sanity Studio
2. Place your cursor where you want the video to appear
3. Press the "+" button to add content
4. Select "YouTube Embed" from the menu

### Step 4: Enter the Video Details

Fill in the fields:
- **YouTube Video ID**: `lCxcTsOHrjo`
- **Video Title**: "Learn TailwindCSS Basics" (optional)
- **Video Description**: "A comprehensive tutorial on TailwindCSS fundamentals" (optional)

### Step 5: Save and Publish

Click "Publish" to save your changes.

### Step 6: View Your Blog Post

When you view your blog post, the YouTube video will appear like this:

![YouTube Video Embed Example](https://i.imgur.com/example.png)

## Behind the Scenes

The YouTube video is rendered with this component:

```jsx
youtube: ({ value }: any) => (
  <div className="relative w-full aspect-video my-8 rounded-lg overflow-hidden">
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${value.videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute top-0 left-0 w-full h-full"
    />
  </div>
)
```

## Tips for Great Video Embeds

1. **Choose High-Quality Videos**: Select videos with good production quality
2. **Add Context**: Write some text before and after the video to explain its relevance
3. **Consider Load Time**: Don't add too many videos to a single blog post
4. **Test on Mobile**: Make sure your embedded videos look good on mobile devices

## Other Video Options

Remember, you can also embed:
- **Vimeo Videos**: Use the "Vimeo Embed" option
- **Custom Videos**: Use the "Video" option to upload your own video files
