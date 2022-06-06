import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ info, title, id }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <article key={id} className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setIsActive(!isActive)}>
          {isActive ? "-" : "+"}
        </button>
      </header>
      {isActive ? <p>{info}</p> : ""}
    </article>
  );
};

export default Question;
