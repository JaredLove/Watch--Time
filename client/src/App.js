import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Navbar from './components/Navbar';
import SearchMovies from './pages/SearchMovies';
import SearchActors from './pages/SearchActors';
import SavedMovies from './pages/SavedMovies';
import Home from './pages/Home';
import Trailer from './pages/Trailer/Trailer';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <>
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' component={SearchMovies} />
          <Route exact path='/actors' component={SearchActors} />
           <Route exact path='/trailers' component={Trailer} /> 
          <Route exact path='/savedmovies' component={SavedMovies} />

            <Route render={() => <h1 className='display-2'>How did you get here?</h1>} />
          </Switch>
          </>
        </Router> 
    </ApolloProvider>

  );
}

export default App;
