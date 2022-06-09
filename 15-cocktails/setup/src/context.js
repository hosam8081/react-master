import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState([]);
  const [query, setQuery] = useState("s");

  let fetchCocktails = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();

      if (data.drinks) {
        let newData = data.drinks.map((item) => {
          let { idDrink, strDrinkThumb, strAlcoholic, strCategory, strGlass } =
            item;
          return {
            id: idDrink,
            img: strDrinkThumb,
            head: strAlcoholic,
            category: strCategory,
            glass: strGlass,
          };
        });

        setCocktail(newData);
        setLoading(false);
      } else {
        setCocktail([]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [query]);

  return (
    <AppContext.Provider value={{ cocktail, loading, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
