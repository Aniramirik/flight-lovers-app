import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Profile, Login, PostFlight } from './pages';
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/login" exact component={Login} />
        <Route path="/post-flight" exact component={PostFlight} />
      </Switch>
    </Router>
  );
}

export default App;
