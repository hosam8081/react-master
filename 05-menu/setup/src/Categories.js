import React from "react";

const Categories = ({ unique, filterCate }) => {
  return (
    <div className="btn-container">
      {[...unique].map((item, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterCate(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
