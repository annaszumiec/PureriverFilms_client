import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavoriteIcon } from "../favorite-icon/favorite-icon";

export const MovieCard = ({ movie, setUser }) => {
  console.log(movie);
  return (
    <Card className=" h-100" style={{ border: "0px solid #47515E" }}>
      <Card.Body style={{ background: "#3A473D" }}>
        <Card.Img src={movie.image} alt="image"
        style={{ marginBottom: "15px" }}
         />

        <FavoriteIcon
          movieID={movie.id}
          setUser={setUser}
        />

        <Link to={`/`}>
          <div
            variant="link"
          ></div>
        </Link>

        <Card.Text style={{ marginTop: "10", color: "A8ADA4" }}>
          directed by{" "}
        </Card.Text>

        <Card.Title
          style={{
            fontFamily: "Cormorant",
            fontWeight: "600",
            color: "D8E4FA",
            fontSize: "24",
          }}
        >
          {movie.director}
        </Card.Title>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
          <div
            style={{ marginLeft: "0", marginTop: "30", color: "A8ADA4" }}
            variant="link"
          >
            Read more
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    relese: PropTypes.string,
  }).isRequired,
};
