import gql from 'graphql-tag';


export const GET_ME = gql`
{
    me {
      _id
      username
      email
      movieCount {
        # _id
        movieId
        image
        title
        overview
      }
    }
  }
`;

