
import Movie from "./Movie";
import Search from "./Search";

const Home = () => {
  return (
    <>
     {/* <div className="head2">
         Movies

        </div> */}
      <div className="container">
        {/* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */}
         
        <Search /> 
        
        <Movie />
      </div>
      
    </>
  );
};

export default Home;
