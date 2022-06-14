import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchQue, setDiffculty, setCategory, setAmount } from "./queSlice";
const SetupForm = () => {
  const { sports, politics, history } = useSelector(
    (state) => state.quiz.cateID
  );
  const { amount } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getFetchQue());
  };
  return (
    <section className="quiz quiz-small">
      <form className="setup-form">
        <h2>setup quiz</h2>
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="form-input"
            min="1"
            max="50"
            value={amount}
            onChange={(e) => dispatch(setAmount(e.target.value))}
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">category</label>
          <select
            name="category"
            id="category"
            className="form-input"
            onClick={(e) => dispatch(setCategory(e.target.value))}
          >
            <option value={sports}>sports</option>
            <option value={history}>history</option>
            <option value={politics}>politics</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="difficulty">select difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            className="form-input"
            onChange={(e) => dispatch(setDiffculty(e.target.value))}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button
          type="submit"
          className="submit-btn"
          onClick={(e) => handleSubmit(e)}
        >
          start
        </button>
      </form>
    </section>
  );
};

export default SetupForm;
