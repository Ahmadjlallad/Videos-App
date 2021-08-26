import React from "react";
import VideoItem from "./VideoItem";
const videoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.data?.items.map((video) => {
    return <VideoItem video={video} />;
  });
  return (
    <div
      onClick={(e) =>
        onVideoSelect(
          e.target.closest(".item").querySelector(".description").textContent
        )
      }
      className="ui relaxed divided list inverted"
    >
      {renderList}
    </div>
  );
};
export default videoList;
