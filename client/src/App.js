import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SearchMovies from "./pages/SearchMovies";
import SearchActors from "./pages/SearchActors";
import SavedMovies from "./pages/SavedMovies";
import Home from "./pages/Home";
import Trailer from "./pages/Trailer/Trailer";
import Splash from "./pages/Splash";
import Footer from "./pages/Footer";

// If user not logged in, displays generic splash page and to login or signup or possibly browse other's lists
import Auth from "./utils/auth";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const loggedIn = Auth.loggedIn();

function App() {
  const [userTheme, setUserTheme] = useState(
    localStorage.getItem("userTheme")
      ? localStorage.getItem("userTheme")
      : "default"
  );
  // const [userTheme, setUserTheme] = useState("default");

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="page-body">
          <Navbar userTheme={userTheme} setUserTheme={setUserTheme} />
          <Switch>
            {loggedIn ? (
              <Route exact path="/" component={Home} />
            ) : (
              <Route exact path="/" component={Splash} />
            )}
            <Route exact path="/movies" component={SearchMovies} />
            <Route exact path="/actors" component={SearchActors} />
            <Route exact path="/trailers" component={Trailer} />
            <Route exact path="/savedmovies" component={SavedMovies} />

            <Route
              render={() => (
                <h1 className="display-2">How did you get here?</h1>
              )}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
