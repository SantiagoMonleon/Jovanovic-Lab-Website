import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import People from './pages/people/People';
import NavBar from './shared/components/header/NavBar';


const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/people" exact>
            <People />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
