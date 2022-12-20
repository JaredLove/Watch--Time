import React from "react";
// import { Navigate } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

import SearchMovies from "./SearchMovies";

// import { useQuery } from "@apollo/client";

// import { GET_ME } from "../utils/queries";

// import Auth from "../utils/auth";

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

  return (
    <Container>
      <Row>
        <Col md={2}>
          <Row className="pt-2 pb-4">
            <div className="fs-5 text-bold">Movie Lists:</div>
            <ListGroup>
              <ListGroupItem>My favs</ListGroupItem>
              <ListGroupItem>Amazing Stories</ListGroupItem>
              <ListGroupItem>Make you cry</ListGroupItem>
              <ListGroupItem>Explosions</ListGroupItem>
              <ListGroupItem>The chick flicks</ListGroupItem>
            </ListGroup>
          </Row>
          <Row>
            <div className="fs-5 text-bold">Favorite Actors:</div>
          </Row>
        </Col>
        <Col md={10}>
          <h6>Movie List Name</h6>
          <SearchMovies />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
