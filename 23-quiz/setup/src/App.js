import React, { useEffect } from "react";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
import { setCount, nextQues, getFetchQue } from "./queSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const { questions, loading, wating, count, score, modal } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();

  if (wating) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  const { correct_answer, incorrect_answers, question } = questions[count];
  let answers = [...incorrect_answers, correct_answer];
  // let answers = incorrect_answers.push(correct_answer);

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  let shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <main>
      {modal ? (
        <Modal />
      ) : (
        ""
      )}
      <section className="quiz">
        <p className="correct-answers">
          correct answers : {score}/{count}
        </p>
        <article className="container">
          <h2>{question}</h2>
          <div className="btn-container">
            {shuffleArray(answers).map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => dispatch(setCount(correct_answer == answer))}
                >
                  {answer}
                </button>
              );
            })}
          </div>
        </article>
        {console.log(questions[count])}
        <button className="next-question" onClick={() => dispatch(nextQues())}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
