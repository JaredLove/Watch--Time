import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { useQuery } from "@apollo/client";

import { GET_ME } from "../utils/queries";

import Auth from "../utils/auth";

function Home() {
  const loggedIn = Auth.loggedIn();
  // if user is not logged in and directly tries to go to /profile, redirects to splash page
  if (!loggedIn) {
    return <Navigate to="/" />;
  }

  // user logged in, requests user data to load user's home page
  const { loading, error, data } = useQuery(GET_ME);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <h1>Homepage</h1>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default Home;
