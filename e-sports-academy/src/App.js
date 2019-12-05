import React from 'react';
import './App.scss';
import GuestHomePage from './GuestHomePage/GuestHomePage';
import Register from './Register/Register';
import Login from './Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="site">
        <Switch>
          <Route path="/" exact>
            <GuestHomePage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Register />
          </Route>
          <Route path='*'>
            <h2>404</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
