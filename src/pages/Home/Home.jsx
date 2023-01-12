import React from "react";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

function Home() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=1d5df23f7e6c438282a2da9acee513f7`)
      .then((res) => res.json())
      .then((data) => setGames(data.result));
  }, []);

  return (
    <div>
      {games.map((i) => {
        return (
          <Card
            name={i.name}
            data={i.released}
            rating={i.rating}
            image={i.background_image}
          />
        );
      })}
    </div>
  );
}

export default Home;
