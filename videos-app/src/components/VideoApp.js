import React from "react";
import "./main.css";
import YouTube from "./../API/YouTube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class VideoApp extends React.Component {
  state = { videos: [], selectedVideo: [] };
  onTermSubmit = (term) => {
    YouTube.get("/search", {
      params: {
        q: term,
      },
    }).then((Response) => this.setState({ videos: Response }));
  };
  onVideoSelect = (selected) => {
    const newSelectedVideo = this.state.videos.data.items.find(
      (video) => selected === video.snippet.title
    );
    this.setState({ selectedVideo: newSelectedVideo });
    console.log(newSelectedVideo);
  };
  render() {
    return (
      <div className="App-main--div ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}
/*
const test = async (SearchKeyWord, maxResults) => {
  const youTube = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${SearchKeyWord}&key=${`AIzaSyBGb9OsMdxU25s8zPI_KchNHwPE0M0bKX8`}`,
    { method: "GET", header: { Accept: "application/json" } }
  );
  const youTubeJSON = await youTube.json();
};
test("apex", 10);
*/
export default VideoApp;
