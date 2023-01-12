import React from "react";

function Card({ name, data, rating, image }) {
  return (
    <div>
      <p>{name}</p>
      <p>{data}</p>
      <p>{rating}</p>
      <div>
        <img src={image} alt={image} />
      </div>
    </div>
  );
}

export default Card;
