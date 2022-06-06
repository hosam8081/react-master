import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((item) => (
        <article className="person" key={item.id}>
          <img
            src={item.image}
            alt="Bertie Yates"
          />
          <div>
            <h4>{item.name}</h4>
            <p>{item.age}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
