import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Schedule from './components/schedule';
import Match from './components/match';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/match" component={Match} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
