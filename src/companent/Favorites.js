import React from "react";

function Favorites(props) {
  return (
    <div className="Card favorite-page">
      <div className="imgDiv">
        <img src={props.favorites.img} />
      </div>
      <h1>{props.favorites.movieTitle}</h1>
      <h3>{props.favorites.year}</h3>
    </div>
  );
}

export default Favorites;
