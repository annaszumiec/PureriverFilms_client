import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import "./movie-view.scss"

export const MovieView = ({ movies}) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);


  {console.log(movies)}

  if (!movie) {
    // movie not found, redirect to homepage
    return <Redirect to="/" />;
  }
  
  return (
    <div>
      <div>
        <img className="w-100" src={movie.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span> Director: </span>
        <span>{movie.director}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>  
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

