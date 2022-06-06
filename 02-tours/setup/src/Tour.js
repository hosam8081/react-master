import React, { useState } from "react";

const Tour = ({image, name, info, price, id, deletItem}) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className="single-tour">
      <img
        src={image}
        alt="Best of Paris in 7 Days Tour"
      />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readMore ? info : info.substring(0, 200)}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? "show less" :"read more"}</button>
        </p>
        <button className="delete-btn" onClick={() => deletItem(id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
