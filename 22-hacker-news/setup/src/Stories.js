import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./newSlice";

const Stories = () => {
  const { loading,  news } = useSelector((state) => state.new);
  const dispatch = useDispatch();

  if (loading) {
    return <div> loading...</div>
  }
  return (
    <section className="stories">
      {news.map((item) => {
        const { objectID, title, num_comments, url, points, author } = item;
        return (
          <article className="story" key={objectID}>
            <h4 className="title">{title}</h4>
            <p className="info">{num_comments}</p>
            <div>
              <a
                href={url}
                className="read-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeItem(objectID))}
              >
                remove
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
