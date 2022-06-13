import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementPage, incrementPage } from "./newSlice";

const Buttons = () => {
  const {page, numberPage} = useSelector(state => state.new)
  const dispatch = useDispatch()
  return (
    <div className="btn-container">
      <button onClick={() => dispatch(decrementPage())}>prev</button>
      <p>{page} of {numberPage}</p>
      <button onClick={() => dispatch(incrementPage())}>next</button>
    </div>
  );
};

export default Buttons;
