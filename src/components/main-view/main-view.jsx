import { useState, useEffect } from "react";

<<<<<<< Updated upstream

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
=======
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";


export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://pureriverfilms.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        // stops loading after response received
        setLoading(false);
        console.log("data", data);
        const moviesFromApi = data.map((movie) => {
          return {
            // value names match to API database
            id: movie._id,
            title: movie.Title,
            image: movie.ImagePath,
            description: movie.Description,
            genre: movie.Genre.Name,
            director: movie.Director.Name,
            release: movie.Release,
>>>>>>> Stashed changes
          };
        });
        setMovies(moviesFromApi);
      });
<<<<<<< Updated upstream
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
=======
  }, [token]);

  // user login or signup
  if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        or
        <SignupView />
      </>
    );
  }

  // displays movie-view

  if (selectedMovie) {
    return (
      <>
        <button
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        >
          {" "}
          Logout
        </button>
        <MovieView
          movie={selectedMovie}
          onBackClick={() => setSelectedMovie(null)}
        />
      </>
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty </div>;
  }
  return (
    // conditional rendering for loading statment
    loading ? (
      <p>Loading...</p>
    ) : !movies || !movies.length ? (
      <p>No movies found</p>
    ) : (
      <div>
        <button
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        >
          {" "}
          Logout
        </button>

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))}
      </div>
    )
  );
};

>>>>>>> Stashed changes
