import React from 'react';
import { TVPlayer } from 'react-tv-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className="video-player-container">
      <TVPlayer url={url} />
    </div>
  );
};

export default VideoPlayer;
