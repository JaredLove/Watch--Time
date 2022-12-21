import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilm } from "@fortawesome/free-solid-svg-icons";

import Auth from "../utils/auth";

// use this to decode a token and get the user's information out of it
import decode from "jwt-decode";

const { data } = decode(localStorage.getItem("id_token"));

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* {userTheme && require(`../assets/css/themes/${userTheme}.css`)} */}
      <Navbar id="navbar-container" variant="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand className="navbarBrand " as={Link} to="/">
            <h3>WATCHTIME</h3>
            {/* <FontAwesomeIcon icon={faFilm} /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          {/* if user is logged in show saved movies and logout */}
          {Auth.loggedIn() ? (
            <Container>
              <Nav.Link as={Link} to="/movies">
                Search for Movies
              </Nav.Link>
              <Nav.Link as={Link} to="/actors">
                Search for Actors
              </Nav.Link>
              <Nav.Link as={Link} to="/savedmovies">
                See Your Movies
              </Nav.Link>
              <Nav.Link as={Link} to="/trailers">
                Trailers
              </Nav.Link>
              <Navbar.Collapse id="navbar">
                <Nav className="ml-auto">
                  <Navbar.Text className="px-3">
                    Hello {data.username}!
                  </Navbar.Text>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          ) : (
            <Navbar.Collapse id="navbar">
              <Nav className="ml-auto">
                <Nav.Link onClick={() => setShowModal(true)}>
                  Login/Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
