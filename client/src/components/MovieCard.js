import Auth from "../utils/auth";
import { saveMovie } from "../utils/API";
import { saveMovieIds, getSavedMovieIds } from "../utils/localStorage";
import movies from "../pages/SearchMovies";

import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
const img = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  id,
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // create state to hold saved movieId values
  const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

  useEffect(() => {
    return () => saveMovieIds(savedMovieIds);
  });

  // create function to handle saving a movie to our database
  const handleSaveMovie = async (movieId) => {
    // find the movie in `movie` state by the matching id
    const movieToSave = movies.find((movie) => id === movieId);

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

      // if movie successfully saves to user's account, save movie id to state
      setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img
          className="card-img-top"
          src={img + poster_path}
          alt="movieimg"
          style={{ width: "200px" }}
        />
        <div className="card-body">
          <h2>{title}</h2>
          {Auth.loggedIn() && (
            <Button
              disabled={savedMovieIds?.some(
                (savedMovieId) => savedMovieId === movies.movieId
              )}
              className="btn-block btn-info"
              onClick={() => handleSaveMovie(movies.movieId)}
            >
              {savedMovieIds?.some(
                (savedMovieId) => savedMovieId === movies.movieId
              )
                ? "This movie has already been saved!"
                : "Save this movie!"}
            </Button>
          )}

          <button type="button" className="btn btn-dark" onClick={handleShow}>
            View More
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="card-img-top"
                style={{ width: "10rem" }}
                src={img + poster_path}
                alt="movieimg"
              />
              <h2>{title}</h2>
              <h4>Rating: {vote_average}</h4>
              <h4>Release Date: {release_date}</h4>
              <h3>Overview</h3>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
