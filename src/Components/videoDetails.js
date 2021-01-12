import React from "react";
import "../style/style.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading......</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="ifram-container">
        <iframe
          className="responsive-iframe"
          src={url}
          title="youtubeVideo"
        ></iframe>
      </div>

      <div className="details">
        <div>
          <h5>{video.snippet.title}</h5>
        </div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
