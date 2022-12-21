import React from "react";
import { CardColumns, Card, Button } from "react-bootstrap";

// import { useMutation, useQuery } from "@apollo/client";
// import { GET_ME } from "../utils/queries";
// import { REMOVE_MOVIE } from "../utils/mutations";

// import { getMe, deleteMovie } from '../utils/API';

// import Auth from '../utils/auth';
// import { removeMovieId } from '../utils/localStorage';

const SavedMovies = ({ movieListID, movieListName }) => {
  // const { loading, data } = useQuery(GET_ME);
  // const [removeMovie, { error }] = useMutation(REMOVE_MOVIE);
  // const userData = data?.me || {};

  // create function that accepts the Movie's mongo _id value as param and deletes the Movie from the database
  // const handleDeleteMovie = async (movieId) => {
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     await removeMovie({
  //       variables: { movieId: movieId },
  //     });

  //     // upon success, remove Movie's id from localStorage
  //     removeMovieId(movieId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // if data isn't here yet, say so
  // if (loading) {
  //   return <h2>LOADING...</h2>;
  // }

  const handleDeleteMovie = async (movieId) => {
    console.log("Movie deleted! ID: ", movieId);
  };

  let userData = {
    savedMovies: [
      {
        movieId: 123,
        image:
          "https://image.tmdb.org/t/p/w500//q3DvoqY06yZnRp9faH6uge7n7VP.jpg",
        title: "The cover for National Lampoon's Vacation",
        description:
          "Clark Griswold is on a quest to take his family on a quest to Walley World theme park for a vacation, but things don't go exactly as planned.",
      },
      {
        movieId: 234,
        image:
          "https://image.tmdb.org/t/p/w500//q3DvoqY06yZnRp9faH6uge7n7VP.jpg",
        title: "The cover for National Lampoon's Vacation",
        description:
          "Clark Griswold is on a quest to take his family on a quest to Walley World theme park for a vacation, but things don't go exactly as planned.",
      },
      {
        movieId: 345,
        image:
          "https://image.tmdb.org/t/p/w500//q3DvoqY06yZnRp9faH6uge7n7VP.jpg",
        title: "The cover for National Lampoon's Vacation",
        description:
          "Clark Griswold is on a quest to take his family on a quest to Walley World theme park for a vacation, but things don't go exactly as planned.",
      },
      {
        movieId: 456,
        image:
          "https://image.tmdb.org/t/p/w500//q3DvoqY06yZnRp9faH6uge7n7VP.jpg",
        title: "The cover for National Lampoon's Vacation",
        description:
          "Clark Griswold is on a quest to take his family on a quest to Walley World theme park for a vacation, but things don't go exactly as planned.",
      },
      {
        movieId: 567,
        image:
          "https://image.tmdb.org/t/p/w500//q3DvoqY06yZnRp9faH6uge7n7VP.jpg",
        title: "The cover for National Lampoon's Vacation",
        description:
          "Clark Griswold is on a quest to take his family on a quest to Walley World theme park for a vacation, but things don't go exactly as planned.",
      },
      {
        movieId: 678,
        image:
          "https://image.tmdb.org/t/p/w500//q3DvoqY06yZnRp9faH6uge7n7VP.jpg",
        title: "The cover for National Lampoon's Vacation",
        description:
          "Clark Griswold is on a quest to take his family on a quest to Walley World theme park for a vacation, but things don't go exactly as planned.",
      },
    ],
  };

  return (
    <>
      {/* <h2>
          {userData.savedMovies.length ? `Viewing ${userData.savedMovies.length} saved ${userData.savedMovies.length === 1 ? "Movie" : "Movies"}:` : "You have no saved Movies!"}
        </h2> */}
      <CardColumns>
        {userData.savedMovies.map((movie) => {
          return (
            <Card key={movie.movieId} border="dark">
              {movie.image ? (
                <Card.Img
                  src={movie.image}
                  alt={`The cover for ${movie.title}`}
                  variant="top"
                />
              ) : null}
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Button
                  className="btn-block btn-danger"
                  onClick={() => handleDeleteMovie(movie.movieId)}
                >
                  Delete this Movie!
                </Button>
                {/* {error && <div>Not able to delete this Movie</div>} */}
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </>
  );
};

export default SavedMovies;
