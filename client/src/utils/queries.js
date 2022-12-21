import gql from 'graphql-tag';

// query for logged in users
export const GET_ME = gql`
  {
    me {
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

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
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

