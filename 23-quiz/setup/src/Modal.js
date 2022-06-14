import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./queSlice";
const Modal = () => {
  const {score} = useSelector(state => state.quiz)
  const dispatch = useDispatch();

  return (
    <div className="modal-container isOpen">
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>You answered {score} of questions correctly</p>
        <button className="close-btn" onClick={() => dispatch(closeModal())}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
