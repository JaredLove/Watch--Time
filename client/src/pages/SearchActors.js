import React, { useState, useEffect } from "react";
import ActorCard from "../components/ActorCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, FormControl, Button } from "react-bootstrap";

const API_URL =
  "https://api.themoviedb.org/3/person/popular?api_key=e62a8500b88c9a431caf5c5d9c7a7674";
// const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=e62a8500b88c9a431caf5c5d9c7a7674&query";
function SearchActors() {
  const [actors, setActors] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setActors(data.results);
      });
  }, []);

  const searchActor = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/person?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setActors(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <Container fluid>
        <Form className="d-flex" onSubmit={searchActor} autoComplete="off">
          <FormControl
            type="search"
            placeholder="Actor Search"
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
        {actors.length > 0 ? (
          <div className="container">
            <div className="grid">
              {actors.map((movieReq) => (
                <ActorCard key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>No actors found with that name!</h2>
        )}
      </div>
    </>
  );
}

export default SearchActors;
