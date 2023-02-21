import { useState } from "react";


import { MovieCard} from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {

  const [ movies, setMovies] = useState ([
    {
      id: 1,
      title: "Gangs of New York",
      image:
        "https://upload.wikimedia.org/wikipedia/en/a/ae/Gangs_of_New_York_Poster.jpg",
      director: "Martin Charles Scorsese"
    },
    {
      id: 2,
      title: "The Irish Man",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/80/The_Irishman_poster.jpg",
      director: "Martin Charles Scorsese"
    },
    {
      id: 3,
      title: "Silence",
      image:
        "https://upload.wikimedia.org/wikipedia/en/3/36/Silence_%282016_film%29.png",
      director: "Martin Charles Scorsese"
    },
    {
      id: 4,
      title: "The Wolf of Wall Street",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
      director: "Martin Charles Scorsese"
    },
    {
      id: 5,
      title: "Finding Nemo",
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg",
      director: "Andrew Stanton"
    },
  ]);
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