import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/home/home'
import FilmDetails from './pages/FilmDetails/FilmDetails'

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/details/:film' component={FilmDetails} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
  );
}

export default App;
