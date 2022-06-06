import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [review, setReview] = useState(people);
  const [index, setIndex] = useState(1);
  const {id, image, name, text, job} = review[index];

  let next = () => {
    if (index >= review.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  let prev = () => {
    if (index === 0) {
      setIndex(review.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  let surp = () => {
    setIndex(Math.floor(Math.random() * review.length))
  }
 
  return (
    <article className="review">
      <div className="img-container">
        <img
          src={image}
          alt="susan smith"
          className="person-img"
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">
        {text}
      </p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={next}> 
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={surp}>surprise me</button>
    </article>
  );
};

export default Review;
