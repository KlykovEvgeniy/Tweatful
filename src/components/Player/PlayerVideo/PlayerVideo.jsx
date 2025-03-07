import ReactPlayer from 'react-player/lazy';
import React from 'react';

export default function Player() {
  return (
    <div className="player-video">
      <ReactPlayer url="https://yandex.ru" loop controls />;
    </div>
  );
}
