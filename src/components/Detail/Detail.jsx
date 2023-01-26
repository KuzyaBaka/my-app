import React from "react";
import "./Detail.css";

function Detail({ image, name, rating, desc }) {
  return (
    <div className="card-info">
      <div className="card-img">
        <img src={image} alt="card" />
      </div>
      <div className="card-main">
        <h1>{name}</h1>
        <div>Rating: {rating}</div>
        <div className="card-text">{desc}</div>
      </div>
    </div>
  );
}

export default Detail;
