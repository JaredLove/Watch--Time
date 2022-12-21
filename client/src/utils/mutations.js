import { gql } from '@apollo/client';

// query for user info when login
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        movieCount
        savedMovies {
        movieId
        description
        title
        image
        
        
      }
      }
    }
  }
`;
// query for create user when sign up
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        movieCount
        savedMovies {
        movieId
        description
        title 
        image
        
        
      }
      }
    }
  }
`;
// query to save the movie
export const SAVE_MOVIE = gql`
  mutation SaveMovie($movie: MovieInput) {
    saveMovie(movie: $movie) {
      _id
      username
      email
      movieCount
      savedMovies {
        movieId
        description
        title
        image
        
        
      }
    }
  }
`;

// query for remove movie from saved
export const REMOVE_MOVIE = gql`
  mutation removeMovie($movieId: String!) {
    removeMovie(movieId: $movieId) {
      _id
      username
      email
      movieCount
      savedMovies {
        movieId 
        description
        title
        image
        
       
      }
    }
  }
`;