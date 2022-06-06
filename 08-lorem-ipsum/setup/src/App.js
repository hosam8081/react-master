import React, { useState } from "react";
import data from "./data";
function App() {
  const [lorem, setLorem] = useState([]);
  let [val, setVal] = useState(1);

  let checkVal = (e) => {
    e.preventDefault()
    setLorem(data.filter((item, index) => index <= val - 1))
  }
  return (
    <section className="section-center">
      {console.log(lorem)}
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={checkVal}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" value={val} onChange={(e) => setVal(e.target.value)}/>
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {lorem.map((item, index) => <p key={index}>{item}</p>)}
      </article>
    </section>
  );
}

export default App;
