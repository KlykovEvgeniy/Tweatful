import ReactPlayer from 'react-player/lazy';
import React from 'react';

export default function Player() {
  return (
    <div className="player-video">
      <ReactPlayer url="https://www.youtube.com/watch?v=vPJHjkhTgyk&ab_channel=WhySuda" loop controls />;
    </div>
  );
}
