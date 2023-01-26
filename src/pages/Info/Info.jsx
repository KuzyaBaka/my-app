import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../../components/Detail/Detail";

function Info() {
  const [detail, setDetail] = useState({});
  const params = useParams();
  const id = params.id.slice(1);
  const {name, background_image, metacritic, description_raw} = detail

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games/${id}?key=1d5df23f7e6c438282a2da9acee513f7`
    )
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  return (
    <div>
      <Detail
        name={name}
        image={background_image}
        rating={metacritic}
        desc={description_raw}
        id={id}
      />
    </div>
  );
}

export default Info;