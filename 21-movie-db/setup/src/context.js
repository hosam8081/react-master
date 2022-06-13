import React, { useState, useContext, useEffect } from "react";
// make sure to use https
// export const API_ENDPOINT = `https://api.themoviedb.org/3/movie/76341?api_key=${process.env.REACT_APP_MOVIE_KEY}`
const AppContext = React.createContext();
export const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_ACCESS_KEY}`;
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");
  let FetchMovies = async () => {
    try {
      if (query) {
        setLoading(true);
        let response = await fetch(`${url}&query=${query}`);
        let data = await response.json();
        console.log(data.results);
        setMovies(data.results);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    FetchMovies();
  }, [query]);
  return (
    <AppContext.Provider value={{ loading, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
