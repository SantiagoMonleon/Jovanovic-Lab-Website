import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import NavBar from './shared/components/header/NavBar';
import Home from './pages/home/Home';
import People from './pages/people/People';
import Media from './pages/media/Media';
import Login from './pages/login/Login';
import Publications from './pages/publications/Publications';


const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/publications" exact>
            <Publications />
          </Route>
          <Route path="/media" exact>
            <Media />
          </Route>
          <Route path="/people" exact>
            <People />
          </Route>
          <Route path="/admin" exact>
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
