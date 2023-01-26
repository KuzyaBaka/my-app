import Pagination from "./../../components/Pagination/Pagination";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Home.css";

function Home({ search }) {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState("1");

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=1d5df23f7e6c438282a2da9acee513f7&page=${page}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setGames(data.results));
  }, [page, search]);

  const handlePage = (e) => {
    setPage(e.target.textContent);
  };

  return (
    <>
      <div className="cont-card">
        {games.map(({ name, released, rating, background_image, id }) => {
          return (
            <Card
              name={name}
              date={released}
              rating={rating}
              image={background_image}
              id={id}
            />
          );
        })}
      </div>
      <div className="button-pagination">
        <Pagination onClick={handlePage} />
      </div>
    </>
  );
}

export default Home;
