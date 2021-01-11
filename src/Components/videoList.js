import React from "react";
import VideoListItem from "./videoListItem";
import "../style/style.css";

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  return <ul className="list-group">{videoItems}</ul>;
};

export default VideoList;
