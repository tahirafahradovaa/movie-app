import React, { useState } from "react";
import "./Card";
// import Favorites from "./Favorites";
import Heart from "./heart-solid.svg";
function Card({ Poster, Title, Year }) {
  let isClicked = false;
  const [items, setItems] = useState({});
  const [favorites, setFavorites] = useState([
    {
      movieTitle: "",
      img: "",
      year: "",
    },
  ]);

  return (
    <>
      <div className="Card first-page">
        <div className="imgDiv">
          <img src={Poster} />
        </div>
        <h1>{Title}</h1>
        <h3>{Year}</h3>
        <img
          name={Title}
          onClick={(e) => {
            isClicked = true;
            setFavorites({
              movieTitle: Title,
              img: Poster,
              year: Year,
            });
          }}
          className="heart"
          src={Heart}
        ></img>
      </div>
      {/* <Favorites favorites={favorites}></Favorites> */}
    </>
  );
}

export default Card;
