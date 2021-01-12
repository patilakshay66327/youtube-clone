import React from "react";
import "../style/style.css";

const VideoListItem = (props) => {
  const video = props.video;

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => props.onVideoSelect(video)} className="list-group-item">
      <div className="row video-list-item">
        <div className="col-md-3">
          <img className="media-object" src={imageUrl} alt="videoImage" />
        </div>
        <div className="col-md-8">
          <h6 className="media-heading">{video.snippet.title}</h6>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
