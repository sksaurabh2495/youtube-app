import React from 'react';

function VideoItem({ title, thumbnailUrl, publishDate }) {

  // Convert the YouTube timestamp to a JavaScript Date object
  const date = new Date(publishDate);

  // Create options for formatting the date
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // Format the date to a user-friendly string
  const formattedDate = date.toLocaleString(undefined, options);

  return (
    <div className="video-item">
      <img src={thumbnailUrl} alt={title} />
      <div className="item">
        <h2>{title}</h2>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}

export default VideoItem;
