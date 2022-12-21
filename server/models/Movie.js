
const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedMovies` array in User.js
const movieSchema = new Schema({
 
 
  movieId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // saved movie id from api
 title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  release: {
    type: String,
  },

  
},
{
    toJSON: {
      getters: true
    }
  },
);

module.exports = movieSchema;