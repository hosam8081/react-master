import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [input, setInput] = useState("# markdown preview'");
  return (
    <section className="markdown">
      <textarea
        className="input"
        style={{ width: "443px", height: "725px" }}
        onChange={(e) => setInput(e.target.value)}
      >
        # markdown preview
      </textarea>
      <article className="results">
        <ReactMarkdown>{input}</ReactMarkdown>
      </article>
    </section>
  );
}

export default App;
