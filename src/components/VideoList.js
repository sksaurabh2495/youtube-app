import React, { useState } from 'react';
import VideoItem from './VideoItem';

function VideoList({ videos }) {

  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          title={video.snippet.title}
          thumbnailUrl={video.snippet.thumbnails.medium.url}
          publishDate={video.snippet.publishedAt}
        />
      ))}
    </div>
  );
}

export default VideoList;
