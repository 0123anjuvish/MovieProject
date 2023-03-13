import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";


const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  /* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */
  return (
    <>
         <section className="search-section">
      
       <h2>Movie</h2>
       
        
       
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div className="srchInp">
            <input
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          
          </div>
        </form>
        <NavLink to ={"favourite"}> <h2 className="hh2"> Fav</h2></NavLink>
       
       
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
