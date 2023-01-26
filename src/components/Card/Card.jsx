import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import Button from "../Button/Button";
import "./Card.css";

function Card({ name, date, rating, image, id }) {
  return (
    <div className="card-wrapper">
      <p className="card-name">{name}</p>
      <p>{date}</p>
      <div>
        <Stack spacing={1}>
          <Rating
            readOnly
            name="size-large"
            defaultValue={rating}
            size="medium"
          />
        </Stack>
      </div>
      <p>{rating}</p>
      <Link to={`/info/:${id}`}>
        <div className="game-img">
          <img src={image} alt="card" />
        </div>
      </Link>
      <Link to={`/screens/:${id}`}>
        <div>
          <Button text="Screens" />
        </div>
      </Link>
    </div>
  );
}

export default Card;
