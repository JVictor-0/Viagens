import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">R${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Mostrar menos" : "Ler mais"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => removeTour(id)}>
          Sem interesse
        </button>
      </footer>
    </article>
  );
};

export default Tour;
