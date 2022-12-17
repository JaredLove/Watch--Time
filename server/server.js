const express = require('express');
const path = require('path');
const db = require('./config/connection');

const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');

//import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

//create new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }  
  
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  // Serve up static assets

  
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });
  

  app.use(routes);

  
  db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // log where we can go to test our GQL API
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
  };

  // Call the async function to start the server
  startApolloServer(typeDefs, resolvers);


