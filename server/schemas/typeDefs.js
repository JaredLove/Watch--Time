const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Movie {
  _id: ID!
  movieId: String
  description: String
  title: String
  image: String
}
type User {
    _id: ID!
    username: String
    email: String
    movieCount: Int
    savedMovies: [Movie]
  }
  input savedMovie {
    description: String
    title: String
    movieId: String
    image: String
}
type Query {
    me: User 
    users: [User]
    user(username: String!): User 
  }
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveMovie(input: savedMovie!): User
    removeMovie(movieId: ID!): User
}
type Auth {
    token: ID!
    user: User
  }
`;




module.exports = typeDefs;