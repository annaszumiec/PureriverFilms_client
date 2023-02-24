import { useState, useEffect } from "react";


import { MovieCard} from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [ movies, setMovies] = useState ([]);

  useEffect(() => {
    fetch("https://pureriverfilms.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        // alert (JSON.stringify(data))
        const moviesFromApi = data.map((doc) => {
          return {
            id: doc._id,
            title: doc.Title,
            image: doc.ImagePath,
            director: doc.Director
          };
        });
        setMovies(moviesFromApi);
      });
  }, []);


const [selectedMovie, setSelectedMovie] = useState(null);
if(selectedMovie) {
  return(
    <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
  );
}
if (movies.length === 0) {
  return <div>The list is empty </div>;
}
return( 
  <div>
    {movies.map((movie) =>(
      <MovieCard
      key={movie.id}
      movie={movie}
      onMovieClick={(newSelectedMovie) => {
        setSelectedMovie(newSelectedMovie);
      } }
      />
    ))}
  </div>
);
};

// Here is where we define all the props constraints for the MovieCard