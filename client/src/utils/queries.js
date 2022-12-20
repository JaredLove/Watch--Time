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
        image
        description
        title
      }
    }
  }
`;

