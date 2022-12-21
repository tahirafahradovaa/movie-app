import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Card.css";
import Favorites from "./Favorites";
function MainPage() {
  const [movie, setMovie] = useState([]);
  const [searchAPI, setSearchApi] = useState("harry");
  const [search, setSearch] = useState("");
  const getData = () => {
    setMovie([]);
    fetch(`https://www.omdbapi.com/?s=${searchAPI}&apikey=dfb3fbc9`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data.Search);
      });
  };

  useEffect(() => {
    getData();
  }, [searchAPI]);

  const handleClick = () => {
    setSearchApi(search);
  };
  return (
    <>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={handleClick}>click</button>
      {/* <button onClick={}>show page</button> */}
      <div className="Card-Container">
        {movie.map((item) => {
          return (
            <>
              <Card
                Poster={item.Poster}
                Year={item.Year}
                Title={item.Title}
              ></Card>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MainPage;
