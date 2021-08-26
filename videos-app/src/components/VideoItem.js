import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video }) => {
  const { snippet } = video;
  return (
    <div className="item video-item">
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
