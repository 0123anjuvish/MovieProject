import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();


     

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("man");
  const [favorite,setFavorite] = useState([]);
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError,favorite,setFavorite }}>
      {children}
    </AppContext.Provider>
  );  
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
