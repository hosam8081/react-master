import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  let fetchJobs = async () => {
    setLoading(true);
    try {
      let response = await fetch(url);
      let data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return "loading...";
  }
  const { company, title, dates, duties } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.company}
                className={`job-btn  ${index == value ? "active-btn": ""}`}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((item, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight />
                <p>
                  {item}
                </p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
