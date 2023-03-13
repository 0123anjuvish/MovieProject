import React from 'react';
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import { BsFillHandThumbsDownFill } from "react-icons/bs";


const imgUrl = "https://via.placeholder.com/200/200";

const Favourite = () => {
  
  const { favorite,isLoading,setFavorite } = useGlobalContext();
  console.log("1234444" + " "+favorite);

  if (isLoading) {
    
    return <div className="loading">Loading....</div>;
  }


  const removeFavorite = (movie) => {
    const newFavoriteList = favorite.filter((favorite) => favorite.imdbID !== movie.imdbID);
    setFavorite(newFavoriteList);
  };
  
  
  return (
    <>
      {/* if movie is present then only show data else remain as it is  */}
      <section className="movie-page">
        <div className="grid grid-4-col">
          {favorite
            ? favorite.map((curMovieElem) => {
                const { imdbID, Title, Poster } = curMovieElem;
                const movieName =Title?.substring(0, 15);

                return (
                  <>
                 
                    <div className="card">
                     
                        <h2>
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                        <NavLink to={`movie/${imdbID}`} key={imdbID} >
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                        </NavLink>
                        <button className="icon"   onClick={() => removeFavorite(curMovieElem)}>
                          <BsFillHandThumbsDownFill/>
                          </button>
                       
                      </div>
                     
                    
                 
                 
                
                  </>
                );
              })
            : ""}
            
        </div>
      </section>
    </>
  );
}

export default Favourite;

