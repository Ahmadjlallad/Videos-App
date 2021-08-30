import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
  const { snippet, key } = video;
  return (
    <div
      className="item video-item"
      key={key}
      onClick={() => onVideoSelect(video)}
    >
      <img
        className="ui image"
        alt="video.snippet.title"
        src={snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="description">{snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
