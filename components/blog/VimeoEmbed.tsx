'use client';

import React from 'react';

interface VimeoEmbedProps {
  videoId: string;
  title?: string;
  description?: string;
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ videoId, title, description }) => {
  return (
    <div className="my-8">
      {title && <h3 className="text-xl font-medium mb-2">{title}</h3>}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <iframe 
          src={`https://player.vimeo.com/video/${videoId}`} 
          width="100%" 
          height="100%" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      {description && <p className="mt-2 text-muted-foreground">{description}</p>}
    </div>
  );
};

export default VimeoEmbed;
