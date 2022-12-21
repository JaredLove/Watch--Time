// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User
  }
  type User {
    _id: ID
    username: String
    email: String
    movieCount: Int
    savedMovies: [Movie]
  }
  type Movie {
    movieId: String
    description: String
    title: String
    image: String
  }
  input MovieInput {
    description: String
    movieId: String
    image: String
    title: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveMovie(movie: MovieInput): User
    removeMovie(movieId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
