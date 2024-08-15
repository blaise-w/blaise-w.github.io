import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Schedule from './components/Schedule';
import Match from './components/Match';

function App() {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    availability: []
  });

  const setUserAvailability = (newAvailability) => {
    setUser(prevUser => ({
      ...prevUser,
      availability: newAvailability
    }));
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route
          path="/schedule"
          render={(props) => (
            <Schedule
              {...props}
              user={user}
              setUserAvailability={setUserAvailability}
            />
          )}
        />
        <Route path="/match" component={Match} />
      </Switch>
    </Router>
  );
}

export default App;
