

// const Movie = () => {
//   const { movie, isLoading, favorite, setFavorite } = useGlobalContext();

//   if (isLoading) {
//     return <div className="loading"></div>;
//   }

//   const AddFavoriteMovie = (movie) => {
//     // console.log(favorite +"anjuuu" + movie);
//     if (!favorite.includes(movie)) {
//       const newFavoriteList = [...favorite, movie];
//       console.log(newFavoriteList);
//       setFavorite(newFavoriteList);
//     }
//     console.log(favorite, "1010");
//   };

//   return (
//     <>
//       <section className="movie-page">
//         <img src={luci} className="bgr" />

//         <div className="grid grid-4-col">
//           {movie
//             ? movie.map((curMovieElem) => {
//                 const { imdbID, Title, Poster } = curMovieElem;
//                 const movieName = Title.substring(0, 15);

//                 return (
//                   <>
//                     <div className="card">
//                       <div>
//                         {" "}
//                         <h2 className="hhh2">
//                           {movieName.length > 13
//                             ? `${movieName}...`
//                             : movieName}
//                         </h2>
//                       </div>
//                       <div className="img1">
//                         {" "}
//                         <NavLink to={`movie/${imdbID}`} key={imdbID}>
//                           <img
//                             src={Poster === "N/A" ? imgUrl : Poster}
//                             alt="#"
//                             className="mlst"
//                           />
//                         </NavLink>
//                       </div>

//                       <button
//                         className="icon"
//                         onClick={() => AddFavoriteMovie(curMovieElem)}
//                       >
//                         <BsFillHandThumbsUpFill />
//                       </button>
//                     </div>
//                   </>
//                 );
//               })
//             : ""}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Movie;


import React, { useState , useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import luci from "../src/images/bck.jpg";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie, isLoading, favorite, setFavorite } = useGlobalContext();
  const [ movieList , setMovieList] = useState([])

  useEffect(() => {
    setMovieList(movie)
  }, [isLoading])
 

  if (isLoading) {

    return <div className="loading"></div>;
  }

  const AddFavoriteMovie = (movie) => {
    console.log(favorite +"anjuuu" + movie);
    if (!favorite.includes(movie)) {
      const newFavoriteList = [...favorite, movie];

      console.log(newFavoriteList);
      setFavorite(newFavoriteList);
      const new_movies =movieList.filter(item=>{if(item.imdbID!==movie.imdbID){
        return {...item}
      }}
      );
      setMovieList(new_movies)
    }
    console.log(favorite, "1010");
  };

  return (
    <>
      <section className="movie-page">
        <img src={luci} className="bgr" />

        <div className="grid grid-4-col">
          {movieList
            ? movieList.map((curMovieElem) => {
                const { imdbID, Title, Poster } = curMovieElem;
                const movieName = Title.substring(0, 15);

                return (
                  <>
                    <div className="card">
                      <div>
                        {" "}
                        <h2 className="hhh2">
                          {movieName.length > 13
                            ? `${movieName}...`
                            : movieName}
                        </h2>
                      </div>
                      <div className="img1">
                        {" "}
                        <NavLink to={`movie/${imdbID}`} key={imdbID}>
                          <img
                            src={Poster === "N/A" ? imgUrl : Poster}
                            alt="#"
                            className="mlst"
                          />
                        </NavLink>
                      </div>

                      <button
                        className="icon"
                        onClick={() => AddFavoriteMovie(curMovieElem)}
                      >
                        <BsFillHandThumbsUpFill />
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
};

export default Movie;