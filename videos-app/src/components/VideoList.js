import React from "react";
import VideoItem from "./VideoItem";
const videoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.data?.items.map((video) => {
    return (
      <VideoItem
        video={video}
        key={video?.id?.videoId}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list inverted">{renderList}</div>;
};
export default videoList;
/*onClick={(e) =>
        onVideoSelect(
          e.target.closest(".item").querySelector(".description").textContent
        )
      }*/
