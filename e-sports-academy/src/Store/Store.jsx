import React from 'react';
import { ActionTypes, loginSuccess, loginFailure, logoutSuccess, logoutFailure, registerSuccess, registerFailure, updateSuccess, updateFailure } from './actions';
import userService from '../services/user-service';

export const StoreContext = React.createContext({});

const initialState = {
  user: undefined,
  error: null
};

function init(state) {
  return initialState;
}

const asyncActionMap = {
  [ActionTypes.Login]:
    ({ user }) => userService.login(user)
      .then(user => loginSuccess(user))
      .catch(error => loginFailure(error)),
  [ActionTypes.Update]:
    ({ user }) => userService.updateInformation(user)
      .then(user => updateSuccess(user))
      .catch(error => updateFailure(error)),
  [ActionTypes.Logout]:
    () => userService.logout()
      .then(() => logoutSuccess())
      .catch(error => logoutFailure(error)),
  [ActionTypes.Register]:
    ({ user }) => userService.register(user)
      .then(user => registerSuccess(user))
      .catch(error => registerFailure(error)),
}

const actionMap = {
  [ActionTypes.Login]: (state) => ({ ...state, error: null }),
  [ActionTypes.LoginSuccess]: (state, { user }) => ({ ...state, user }),
  [ActionTypes.LoginFailure]: (state, { error }) => ({ ...state, error }),

  [ActionTypes.Update]: (state) => ({ ...state, error: null }),
  [ActionTypes.UpdateSuccess]: (state, { user }) => ({ ...state, user }),
  [ActionTypes.UpdateFailure]: (state, { error }) => ({ ...state, error }),

  [ActionTypes.LogoutSuccess]: (state) => ({ ...state, user: null }),

  [ActionTypes.Register]: (state) => ({ ...state, error: null }),
  [ActionTypes.RegisterSuccess]: (state, { user }) => ({ ...state, user }),
  [ActionTypes.RegisterFailure]: (state, { error }) => ({ ...state, error }),

}

const storeReducer = (state, action) => {
  const handler = actionMap[action.type];
  return handler ? handler(state, action.payload) : state;
}

const Store = ({ children }) => {

  const [state, dispatch] = React.useReducer(storeReducer, initialState, init);

  const store = React.useMemo(() => ({
    state,
    dispatch: (action) => {
      const asyncActionHandler = asyncActionMap[action.type];
      if (asyncActionHandler) {
        asyncActionHandler(action.payload).then(dispatch);
      }
      dispatch(action);
    }
  }), [state, dispatch]);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
};

export default Store;