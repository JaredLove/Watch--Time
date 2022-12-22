import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Modal,
  Tab,
  NavDropdown,
} from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilm } from "@fortawesome/free-solid-svg-icons";
// import { GET_ME } from '../utils/queries';
import Auth from "../utils/auth";

// use this to decode a token and get the user's information out of it
// import decode from "jwt-decode";

// const loggedIn = Auth.loggedIn();

// const { data } = { username: "" };

// import { useQuery } from '@apollo/client';
const AppNavbar = ({ userTheme, setUserTheme }) => {
  // const { data } = useQuery(GET_ME);
  // const userData = data?.me || {};
  // console.log(userData);
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
            <Navbar.Collapse id="navbar">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/" className="navhover">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/movies" className="navhover mx-2">
                  Search for Movies
                </Nav.Link>
                <Nav.Link as={Link} to="/actors" className="navhover">
                  Search for Actors
                </Nav.Link>
                <Nav.Link as={Link} to="/savedmovies" className="navhover">
                  See Your Movies
                </Nav.Link>
              </Nav>
              <Nav className="ml-auto">
                <NavDropdown
                  title={`Settings`}
                  id="basic-nav-dropdown"
                  drop="left"
                  className="btn btn-dark btn-sm"
                >
                  <NavDropdown.Item id="nav-list-title" disabled>
                    CHOOSE THEME
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={(e) => {
                      setUserTheme(`red`);
                    }}
                  >
                    Red Dawn
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={(e) => {
                      setUserTheme(`pink`);
                    }}
                  >
                    Pretty in Pink
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={(e) => {
                      setUserTheme(`purple`);
                    }}
                  >
                    Purple Rain
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={(e) => {
                      setUserTheme(`blue`);
                    }}
                  >
                    The Blues Brothers
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={(e) => {
                      setUserTheme(`green`);
                    }}
                  >
                    Hulk Green
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={(e) => {
                      setUserTheme(`yellow`);
                    }}
                  >
                    Bumblebee Yellow
                  </NavDropdown.Item>
                  <NavDropdown.Divider className="mt-4" />
                  <NavDropdown.Item onClick={Auth.logout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Nav className="ml-auto">
              <Nav.Link onClick={() => setShowModal(true)}>
                Login/Sign Up
              </Nav.Link>
            </Nav>
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
