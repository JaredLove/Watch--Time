import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar';
import SearchMovies from './pages/SearchMovies';
import SearchActors from './pages/SearchActors';
import SavedMovies from './pages/SavedMovies';
import Home from './pages/Home';



const client = new ApolloClient({

  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
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
          <Route exact path='/savedmovies' component={SavedMovies} />
            <Route render={() => <h1 className='display-2'>How did you get here?</h1>} />
          </Switch>
          </>
        </Router> 
    </ApolloProvider>

  );
}

export default App;
