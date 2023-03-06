import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
<<<<<<< Updated upstream
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
=======
    <Card onClick={() => onMovieClick(movie)}>
    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.director}</Card.Text>
      <Button onClick={() => onBookClick(book)} variant="link">
        Open
      </Button>
    </Card.Body>
  </Card>
);
>>>>>>> Stashed changes
};

//Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    relese: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
