import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);

  return (
    <div>
      <div>
        <img
          style={{ float: "left", paddingRight: "40px" }}
          src={movie.image}
        />
      </div>

      <div 
      style={{ fontSize:"24px",marginBottom:"30px" }}>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>{movie.description}</span>
      </div>
      <div
       style={{ marginTop:"20px" }}>
        <span> Director: </span>
        <span>{movie.director}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>
      <Link to={`/`}>
      <Button type='submit' className='mt-3'
                         style={{ backgroundColor:"#3A473D", border:"none", color:"#D8E4FA"  }}
                    >
                      Back
                    </Button>
      </Link>
    </div>
  );
};

