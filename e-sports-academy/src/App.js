import React from 'react';
import './App.scss';
import GuestHomePage from './GuestHomePage/GuestHomePage';
import LoggedInHomePage from './LoggedInHomePage/LoggedInHomePage'
import Register from './Register/Register';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Store, { StoreContext } from "./Store/Store";
import { loginSuccess, registerSuccess } from "./Store/actions";


const Auth = ({ children }) => {
  const { dispatch } = React.useContext(StoreContext);
  React.useEffect(() => {
    fetch("http://localhost:9999/auth", { credentials: "include" })
      .then(res =>
        res.status === 200
          ? res.json()
          : res.text().then(text => Promise.reject(text))
      )
      .then((user) => {dispatch(loginSuccess(user)); dispatch(registerSuccess(user));})
      .catch(() => {
        dispatch(loginSuccess(null)); 
        dispatch(registerSuccess(null))
      });
  }, []);

  return <>{children}</>;
};


function App() {
  return (
    <Router>
      <Store>
        <Auth>
          <StoreContext.Consumer>
            {({ state }) => {
              const { user } = state;
              const isLogged = !!state.user;
              console.log(isLogged)
              return user === undefined ? (
                <div>Loading...</div>
              ) :
                (<div className="site">
                  <Switch>
                    <Route path="/" exact render={!isLogged ? () => <GuestHomePage /> : () => <LoggedInHomePage />}>
                    </Route>
                    <Route path="/register" exact render={!isLogged ? () => <Register /> : () => <Redirect to="/" />}>
                    </Route>
                    <Route path="/login" exact render={!isLogged ? () => <Login /> : () => <Redirect to="/" />}>
                    </Route>
                    <Route path="/logout" exact render={isLogged ? () => <Logout /> : () => <Redirect to="/" />}>
                    </Route>
                    <Route path='*'>
                      <h2>404</h2>
                    </Route>
                  </Switch>
                </div>)
            }}
          </StoreContext.Consumer>
        </Auth>
      </Store>
    </Router>
  );
}

export default App;
