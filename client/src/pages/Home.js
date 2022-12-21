import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ListGroup from "react-bootstrap/ListGroup";
import SavedMovies from "./SavedMovies";

// import { useQuery } from "@apollo/client";

// import { GET_ME } from "../utils/queries";

// import Auth from "../utils/auth";

const userData = {
  defaultListId: {
    movieListId: 45687,
    listName: "Kid friendly list",
  },
  movieLists: [
    {
      _id: 987,
      listName: "My first list",
    },
    {
      _id: 876,
      listName: "Movies with Trains and coin collecting adventures",
    },
    {
      _id: 654,
      listName: "Feel good movies",
    },
    {
      _id: 852,
      listName: "Turn off brain list",
    },
    {
      _id: 45687,
      listName: "Kid friendly list",
    },
    {
      _id: 65654,
      listName: "Superhero flicks",
    },
    {
      _id: 12456,
      listName: "Scary movie list",
    },
    {
      _id: 852471,
      listName: "For the girlfriend",
    },
  ],
};

function Home() {
  // const loggedIn = Auth.loggedIn();
  // if user is not logged in and directly tries to go to /profile, redirects to splash page
  // if (!loggedIn) {
  //   return <Navigate to="/" />;
  // }

  // user logged in, requests user data to load user's home page
  // const { loading, error, data } = useQuery(GET_ME);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // movie list to display
  // const [movieList, setMovieListsetActiveListItem] = useState(user.defaultListId);
  const [movieListName, setMovieListName] = useState(
    userData.defaultListId.listName
  );
  const [movieListArr, setMovieListArr] = useState("Loading...");

  const handleListClick = (event) => {
    event.preventDefault();
    if (event.target.textContent) {
      console.log(event.target.textContent);
      setMovieListName(event.target.textContent);
      // setText(event.target.value);
      // setCharacterCount(event.target.value.length);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={2}>
          <Row className="pt-2 pb-4">
            {/* <div className="fs-5 text-bold">Your Movie Lists:</div> */}
            <ListGroup
              defaultActiveKey={userData.defaultListId.movieListId}
              variant="flush"
            >
              <ListGroup.Item
                disabled
                className="px-2 font-weight-bold text-dark"
              >
                Your Movie Lists:
              </ListGroup.Item>
              {userData.movieLists.length &&
                userData.movieLists.map((movieList) => (
                  <ListGroup.Item
                    action
                    href=""
                    onClick={handleListClick}
                    key={movieList._id}
                    eventKey={movieList._id}
                    className="px-2"
                  >
                    {movieList.listName}
                  </ListGroup.Item>
                ))}

              <ListGroup.Item
                action
                href=""
                onClick={handleListClick}
                className="px-2"
              >
                Create a new list...
              </ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <div className="fs-5 text-bold">Favorite Actors:</div>
          </Row>
        </Col>
        <Col md={10}>
          <h5>Viewing: {movieListName}</h5>
          <SavedMovies
            movieListArr={movieListArr}
            setMovieListArr={setMovieListArr}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
