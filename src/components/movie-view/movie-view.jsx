import "./movie-view.scss"

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
<<<<<<< Updated upstream
        <div>
          <img src={movie.image} />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span> Director: </span>
          <span>{movie.director.Name}</span>
        </div>
        <button onClick={onBackClick}>Back</button>
=======
        <img src={movie.image} />
>>>>>>> Stashed changes
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span> Director: </span>
        <span>{movie.director}</span>
      </div>
      <button
       onClick={onBackClick}
       className="back-button"
       >Back</button>
    </div>
  );
};
