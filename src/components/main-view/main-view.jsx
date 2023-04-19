import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { AccessCard } from "../access-card/acess-card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);

  const [filteredMovies, setFilteredMovies] = useState([]);

  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //bg image
  const bgImage = (...styleClassNames) => {
    const container = document.querySelector("#root");
    container.className = "";
    styleClassNames.forEach((styleClassName) =>
      container.classList.add(styleClassName)
    );
  };

  useEffect(() => {
    if (user) {
      bgImage("text-bg-dark");
    } else {
      bgImage("root");
    }
  }, [user]);

  //bg Image - end

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch("https://pureriverfilms.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })

      .then((data) => {
        setIsPending(false);
        setError(null);

        const moviesFromApi = data.map((movie) => {
          return {
            // value names match to API database
            id: movie._id,
            title: movie.Title,
            image: movie.ImagePath,
            description: movie.Description,
            genre: movie.Genre.Name,
            director: movie.Director.Name
          };
        });

        setMovies(moviesFromApi);
      })

      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [token]);

  //search
  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  // Handle changes in the search input field

  const handleSearchInput = (e) => {
    const searchWord = e.target.value.toLowerCase();
    let tempArray = movies.filter((m) =>
      m.title.toLowerCase().includes(searchWord)
    );
    setFilteredMovies(tempArray);
  };

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
        handleSearchInput={handleSearchInput}
      />
      <AccessCard user={user} />
      <Container>
        <Row className="justify-content-md-center">
          <Routes>
            <Route
              path="/signup"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={5}>
                      <SignupView />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={5}>
                      <LoginView
                        onLoggedIn={(user, token) => {
                          setUser(user);
                          setToken(token);
                        }}
                      />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/movies/:movieId"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col></Col>
                  ) : (
                    <Col md={8}>
                      <MovieView movies={movies} username={user.Username} />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/users/:username"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col>
                      <ProfileView movies={movies} />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <div>The list is empty!</div>
                  ) : (
                    <>
                      {error && <div>{error}</div>}
                      {isPending && <div> loading... </div>}
                      {filteredMovies.map((movie) => (
                        <Col className="mb-5" key={movie.id} md={3}>
                          <MovieCard movie={movie} />
                        </Col>
                      ))}
                    </>
                  )}
                </>
              }
            />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
};
