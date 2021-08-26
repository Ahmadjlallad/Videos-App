import React from "react";
const VideoDetail = ({ video }) => {
  if (!video?.snippet) return null;
  return (
    <div>
      <div className="ui segment inverted">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
