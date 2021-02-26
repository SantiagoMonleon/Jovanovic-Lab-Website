import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import NavBar from './shared/components/header/MainNavigation';
import Footer from './shared/components/footer/Footer'
import Home from './pages/home/Home';
import People from './pages/people/People';
import Former from './pages/people/Former';
import Media from './pages/media/Media';
//import Login from './pages/login/Login';
import Publications from './pages/publications/Publications';
import Research from './pages/research/Research';
import ICore from './pages/research/components/ICore'

import './App.css';

function App() {
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
          <Route path="/research" exact>
            <Research />
          </Route>
          <Route path="/research/icore" exact>
            <ICore />
          </Route>
          <Route path="/media" exact>
            <Media />
          </Route>
          <Route path="/people" exact>
            <People />
          </Route>
          <Route path="/people/former">
            <Former />
          </Route>
          <Route path="/admin" exact>
            {/*<Login />*/}
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      {/*<Footer />*/}
    </Router>
  );
}

export default App;
