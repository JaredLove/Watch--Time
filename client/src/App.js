import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import SearchMovies from "./pages/SearchMovies";
import SearchActors from "./pages/SearchActors";
import SavedMovies from "./pages/SavedMovies";
import Splash from "./pages/Splash";
import Footer from "./pages/Footer";

// If user not logged in, displays generic splash page and to login or signup or possibly browse other's lists
import Auth from "./utils/auth";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

const loggedIn = Auth.loggedIn();

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="page-body">
          <Navbar />
          <Routes>
            {loggedIn ? (
              <Route exact path="/" elements={<Home />} />
            ) : (
              <Route exact path="/" elements={<Splash />} />
            )}
            <Route exact path="/movies" elements={<SearchMovies />} />
            <Route exact path="/actors" elements={<SearchActors />} />
            <Route exact path="/savedmovies" elements={<SavedMovies />} />
            <Route
              render={() => (
                <h1 className="display-2">How did you get here?</h1>
              )}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
