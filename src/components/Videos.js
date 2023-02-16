import React from "react";
import VideoCard from "../components/VideoCard.js"
import "../Styles/videos.css"

const Videos = ({ videos }) => {
  return (
    <div className="video">
      {videos.map((item, index) => (
        <VideoCard
          key={item.image}
          index={index}
          name={item.name}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Videos;
