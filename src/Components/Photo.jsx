import React from "react";
import "../App.css";

function Photo({ photo }) {
  return (
    <div className="photo">
      <img src={photo.urls.small} alt="" />
    </div>
  );
}

export default Photo;
