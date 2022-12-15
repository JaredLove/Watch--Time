import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, FormControl, Button } from "react-bootstrap";

import Auth from "../utils/auth";
import { saveMovie } from "../utils/API";
import { saveMovieIds, getSavedMovieIds } from "../utils/localStorage";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=e62a8500b88c9a431caf5c5d9c7a7674";
// const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=e62a8500b88c9a431caf5c5d9c7a7674&query";
function SearchMovies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  // create state to hold saved movieId values
  const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveMovieIds(savedMovieIds);
  });

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (event) => {
    event.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (event) => {
    setQuery(event.target.value);
  };

  // create function to handle saving a book to our database
  const handleSaveMovie = async (movieId) => {
    // find the book in `searchedBooks` state by the matching id
    const movieToSave = movies.find((movie) => movie.movieId === movieId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveMovie(movieToSave, token);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      // if book successfully saves to user's account, save book id to state
      setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {/* {Auth.loggedIn() && (
                    <Button
                      disabled={savedMovieIds?.some((savedMovieId) => savedMovieId === movies.movieId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveMovie(movies.movieId)}>
                      {savedMovieIds?.some((savedMovieId) => savedMovieId === movies.movieId)
                        ? 'This movie has already been saved!'
                        : 'Save this movie!'}
                    </Button>
                  )}
   */}
      <Container fluid>
        <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
          <FormControl
            type="search"
            placeholder="Movie Search"
            className="me-2"
            aria-label="search"
            name="query"
            value={query}
            onChange={changeHandler}
          ></FormControl>
          <Button variant="secondary" type="submit">
            Search
          </Button>
        </Form>
      </Container>

      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieCard key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>No movies found with that name!</h2>
        )}
      </div>
    </>
  );
}

export default SearchMovies;
