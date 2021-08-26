import axios from "axios";
const KEY = `AIzaSyBGb9OsMdxU25s8zPI_KchNHwPE0M0bKX8`;
export default axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3`,
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
