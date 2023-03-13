import React, { useState, useEffect } from "react";

// setting the api link
export const API_URL = `https://www.omdbapi.com/?apikey=bfca8edd`;
/* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [movie, setMovie] = useState(null);
 
  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
console.log(url);
      // console.log("anju"+ data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search || data);
        setIsError({ show: "false", msg: "" });
      } else {
        setIsError({ show: "true", msg: data.Error });
      }
    } catch (error) {
      console.log("anju...." + error);
    }
  };


// to add movie in favorite list
  
// const AddFavoriteMovie = (movie) => { 
//   if (!favorite.includes(movie)) {
//     const newFavoriteList = [...favorite, movie];
//   setFavorite(newFavoriteList);
//   } 
// }

// TO remove movie from favorite list

// const removeFavorite = (movie) => {
//   const newFavoriteList = favorite.filter((favorite) => favorite.imdbID !== movie.imdbID);
//   setFavorite(newFavoriteList);
// };


  // debouncing in react js
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&s=${apiParams}`);
    }, 1000);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);

  return { isLoading, isError, movie };
};

export default useFetch;
