import React from "react";
const VideoDetail = ({ video }) => {
  if (!video?.snippet) return null;
  const videoSrc = `https://www.youtube.com/embed/${video?.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={videoSrc}
          title="video Player"
          allowFullScreen
          clipboard-write="true"
          picture-in-picture="true"
        />
      </div>
      <div className="ui segment inverted">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
/*
<iframe width="560" height="315" src="" title="YouTube video player"
frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
encrypted-media; gyroscope; picture-in-picture">*/
