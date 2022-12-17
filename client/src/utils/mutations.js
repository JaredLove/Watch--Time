import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    
    user {
      _id
      username
      email
      movieCount
      savedMovies {
        movieId
        image
        title
        description
      }
    }
    token
  }
}
`;

export const SAVE_MOVIE = gql`
    mutation saveMovie($input: savedMovie!) {
    saveMovie (input: $input)
        {
            _id
            username
            email
            movieCount
            savedMovies {
              movieId
              image
              title
              description
            }
        }
    }
`;



export const REMOVE_MOVIE = gql`
    mutation removeMovie($movieId: ID!) {
        removeMovie(movieId:$movieId) {
            _id
            username
            email
            movieCount
            savedMovies {
              movieId
              image
              title
              description
            }
        }
      }
      `;
