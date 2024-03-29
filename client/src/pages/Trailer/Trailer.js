import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Movie from "../../components/Movie";
import Youtube from "react-youtube";
import "./test.css";

function Test() {
  // api calls
  const api = "https://api.themoviedb.org/3/";
  const searchInput = api + "search/movie";
  const discover = api + "discover/movie";


  const API_KEY = "e62a8500b88c9a431caf5c5d9c7a7674";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

  //usestate varaibles for page
  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  // pre load data so trailer page doesnt load blank
  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const { data } = await axios.get(`${searchKey ? searchInput : discover}`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    // set the data results of the api call
    setMovies(data.results);
    setMovie(data.results[0]);
    
    if (data.results.length) {
      await fetchMovie(data.results[0].id);
    }
  };
  //getting the id of a movie to display
  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${api}movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });
    //
    if (data.videos && data.videos.results) {

      const trailer = data.videos.results.find(

        (vid) => vid.name === "Official Trailer"

      );

      setTrailer(trailer ? trailer : data.videos.results[0]);

    }
            console.log(data.videos.results[0])
    setMovie(data);
  };

  const selectMovie = (movie) => {
    fetchMovie(movie.id);
    setPlaying(false);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  const renderMovies = () =>
    movies.map((movie) => (
      <Movie selectMovie={selectMovie} key={movie.id} movie={movie} />
    ));
  //return data
  return (
    <div className="App">
      <div className="center-max-size header">
        <form className="form" onSubmit={fetchMovies}>
          <input
            className="search"
            type="text"
            id="search"
            onInput={(event) => setSearchKey(event.target.value)}
          />
          <button className="submit-search" type="submit">
            Search
          </button>
        </form>
      </div>
      {movies.length ? (
        <section>
          {movie ? (
            <div
              className="poster"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})`,
              }}
            >
              {playing ? (
                <>
                  <Youtube
                    videoId={trailer.key}
                    className="youtube"
                    id="youtube-player"
                    containerClassName="youtube-container"
                    style={{marginLeft: "auto",marginRight: "auto",}}
                    opts={{
                      playerVars: {
                        autoplay: 1,
                        controls: 1,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button
                    onClick={() => setPlaying(false)}
                    className={"button close-video"}
                  >
                    Close
                  </button>
                </>
              ) : (
                <div className="center-max-size">
                  <div className="poster-content">
                    {trailer ? (
                      <button
                        className={"button play-video"}
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer is available"
                    )}
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}

          <div className={"center-max-size  movies"}>{renderMovies()}</div>
        </section>
      ) : (
        "No movie was found sorry"
      )}
    </div>
  );
}

export default Test;
