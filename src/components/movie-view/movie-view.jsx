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
      style={{ fontSize:"24px",marginBottom:"30px",color:"#D8E4FA" }}>
        <span>{movie.title}</span>
      </div>
      <div>
        <span
         style={{ color:"#A8ADA4" }}
        
        >{movie.description}</span>
      </div>
      <div
       style={{ marginTop:"20px",color:"#D8E4FA " }}>
        <span> Director: </span>
        <span>{movie.director}</span>
      </div>
      <div
       style={{ color:"#D8E4FA " }}>
        <span >Genre: </span>
        <span >{movie.genre}</span>
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

