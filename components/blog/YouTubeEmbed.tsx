'use client';

import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  description?: string;
}

// Helper function to extract YouTube video ID from various URL formats
const extractYouTubeId = (input: string): string => {
  // If it's already just an ID (no slashes or equals signs), return it
  if (!/[/?=&]/.test(input)) {
    return input;
  }
  
  // Handle full YouTube URLs
  const regexPatterns = [
    // Standard YouTube URL: https://www.youtube.com/watch?v=VIDEO_ID
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\?\n]+)/,
    // YouTube URL with timestamp: https://www.youtube.com/watch?v=VIDEO_ID&t=123s
    /(?:youtube\.com\/watch\?v=)([^&\n]+)/,
    // YouTube short URL: https://youtu.be/VIDEO_ID
    /(?:youtu\.be\/)([^\?\n]+)/,
    // YouTube embed URL: https://www.youtube.com/embed/VIDEO_ID
    /(?:youtube\.com\/embed\/)([^\?\n]+)/
  ];
  
  for (const regex of regexPatterns) {
    const match = input.match(regex);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  // If no patterns match, return the original input as fallback
  console.warn('Could not extract YouTube ID from:', input);
  return input;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title, description }) => {
  // Extract the actual video ID from whatever was passed
  const actualVideoId = extractYouTubeId(videoId);
  
  return (
    <div className="my-8">
      {title && <h3 className="text-xl font-medium mb-2">{title}</h3>}
      <div className="rounded-lg overflow-hidden">
        <LiteYouTubeEmbed 
          id={actualVideoId}
          title={title || 'YouTube video player'}
          poster="hqdefault"
          noCookie={true}
          wrapperClass="yt-lite"
        />
      </div>
      {description && <p className="mt-2 text-muted-foreground">{description}</p>}
    </div>
  );
};

export default YouTubeEmbed;
