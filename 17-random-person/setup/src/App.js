import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  let [loading, setLoading] = useState(true);
  let [info, setInfo] = useState([]);
  let [detail, setDetail] = useState('name');
  let fetchApi = async () => {
    try {
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      let newData = data.results.map((item) => {
        let { email, phone, name, login, dob } = item;
        let street = item.location.street.name;
        let { first, last } = name;
        const { large: image } = item.picture
        let { password } = login;
        let { age } = dob;
        return { email, phone, name: `${first} ${last}`, password, age, street, image };
      });
      setInfo(newData[0]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  let handleClick = (e) => {
    if (e.target.classList.contains('icon')) {
      let newval = e.target.dataset.label
      setDetail(`${newval}`)
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={info.image ? info.image : defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {detail} is</p>
          <p className="user-value">{info[detail]}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={handleClick}>
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="email" onMouseOver={handleClick}>
              <FaUser />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleClick}>
              <FaCalendarTimes />
            </button>
            <button className="icon" data-label="street" onMouseOver={handleClick}>
              <FaMap />
            </button>
            <button className="icon" data-label="phone" onMouseOver={handleClick}>
              <FaPhone />
            </button>
            <button className="icon" data-label="password" onMouseOver={handleClick}>
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={fetchApi}>
            random user
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
