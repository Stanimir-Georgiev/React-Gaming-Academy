import React from 'react';
import './App.scss';
import './Shared/spinner.scss'
import GuestHomePage from './GuestHomePage/GuestHomePage';
import LoggedInHomePage from './LoggedInHomePage/LoggedInHomePage'
import Register from './Register/Register';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Profile from './Profile/Profile';
import Courses from './Course/Courses/Courses'
import Details from './Course/Details/Details'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Store, { StoreContext } from "./Store/Store";
import { loginSuccess, registerSuccess, updateSuccess} from "./Store/actions";
import CreateCourse from './Course/CreateCourse/CreateCourse';


const Auth = ({ children }) => {
  const { dispatch, state } = React.useContext(StoreContext);
  React.useEffect(() => {
    fetch("http://localhost:9999/auth", { credentials: "include" })
      .then(res =>
        res.status === 200
          ? res.json()
          : res.text().then(text => Promise.reject(text))
      )
      .then((user) => {dispatch(loginSuccess(user)); dispatch(registerSuccess(user)); dispatch(updateSuccess(user))})
      .catch(() => {
        dispatch(loginSuccess(null)); 
        dispatch(registerSuccess(null));
        dispatch(updateSuccess(null))
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
              return user === undefined ? (
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
              ) :
                (<div className="site">
                  <Switch>
                    <Route path="/" exact render={!isLogged ? () => <GuestHomePage /> : () => <LoggedInHomePage />}>
                    </Route>
                    <Route path="/register" exact render={!isLogged ? () => <Register /> : () => <Redirect to="/profile" />}>
                    </Route>
                    <Route path="/login" exact render={!isLogged ? () => <Login /> : () => <Redirect to="/" />}>
                    </Route>
                    <Route path="/logout" exact render={isLogged ? () => <Logout /> : () => <Redirect to="/" />}>
                    </Route>
                    <Route path="/profile" exact render={isLogged ? () => <Profile /> : () => <Redirect to="/login" />}>
                    </Route>
                    <Route path="/createCourse" exact render={isLogged && state.user.isAdmin ? () => <CreateCourse /> : () => <Redirect to="/" />}>
                    </Route>
                    <Route path="/courses" exact render={isLogged ? () => <Courses /> : () => <Redirect to="/login" />}>
                    </Route>
                    <Route path="/course/details/:id" exact render={isLogged ? () => <Details /> : () => <Redirect to="/login" />}>
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
