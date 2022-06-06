import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setLoading(true);
    try {
      let response = await fetch(url);
      let data = await response.json();
      setTour(data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const deletItem = (id) => {
    setTour(tour.filter((item) => item.id !== id));
  };

  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        {tour.length === 0 ? <button className="btn" onClick={() => fetchTours()}>refresh</button> : <Tours tour={tour} deletItem={deletItem} />}
      </section>
    </main>
  );
}

export default App;
