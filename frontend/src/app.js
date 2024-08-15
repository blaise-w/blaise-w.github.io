import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Schedule from './components/Schedule';
import Match from './components/Match';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/match" component={Match} />
      </Switch>
    </Router>
  );
}

export default App;
