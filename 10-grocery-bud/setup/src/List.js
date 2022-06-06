import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ id, text, onDelete, onEdit}) => {
  return (
    <article className="grocery-item">
      <p className="title">{text}</p>
      <div className="btn-container">
        <button type="button" className="edit-btn" onClick={() => onEdit(id)}>
          <FaEdit />
        </button>
        <button type="button" className="delete-btn" onClick={() => onDelete(id)}>
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default List;
