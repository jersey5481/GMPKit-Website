'use client';

import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  title?: string;
  caption?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, posterUrl, title, caption }) => {
  return (
    <div className="my-8">
      {title && <h3 className="text-xl font-medium mb-2">{title}</h3>}
      <div className="relative w-full rounded-lg overflow-hidden">
        <video 
          controls 
          width="100%" 
          className="aspect-video"
          poster={posterUrl}
        >
          <source src={videoUrl} type={`video/${videoUrl.split('.').pop()}`} />
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && <p className="mt-2 text-muted-foreground">{caption}</p>}
    </div>
  );
};

export default VideoPlayer;
