export const ActionTypes = {
    Login: Symbol("[AUTH] Login"),
    LoginSuccess: Symbol("[AUTH] Login Success"),
    LoginFailure: Symbol("[AUTH] Login Failure"),
  
    Register: Symbol("[AUTH] Register"),
    RegisterSuccess: Symbol("[AUTH] Register Success"),
    RegisterFailure: Symbol("[AUTH] Register Failure"),

    Logout: Symbol("[AUTH] Logout"),
    LogoutSuccess: Symbol("[AUTH] Logout Success"),
    LogoutFailure: Symbol("[AUTH] Logout Failure"),

    Update: Symbol("[AUTH] Update"),
    UpdateSuccess: Symbol("[AUTH] Update Success"),
    UpdateFailure: Symbol("[AUTH] Update Failure"),
  };
  
  export const login = (user) => ({ type: ActionTypes.Login, payload: { user }});
  export const loginFailure = (error) => ({ type: ActionTypes.LoginFailure, payload: { error }});
  export const loginSuccess = (user) => ({ type: ActionTypes.LoginSuccess, payload: { user }});

  export const register = (user) => ({ type: ActionTypes.Register, payload: { user }});
  export const registerFailure = (error) => ({ type: ActionTypes.RegisterFailure, payload: { error }});
  export const registerSuccess = (user) => ({ type: ActionTypes.RegisterSuccess, payload: { user }});
  
  export const logout = () => ({ type: ActionTypes.Logout, payload: undefined });
  export const logoutFailure = (error) => ({ type: ActionTypes.LogoutFailure, payload: { error }});
  export const logoutSuccess = () => ({ type: ActionTypes.LogoutSuccess, payload: undefined });

  export const update = (user) => ({ type: ActionTypes.Update, payload: { user }});
  export const updateFailure = (error) => ({ type: ActionTypes.UpdateFailure, payload: { error }});
  export const updateSuccess = (user) => ({ type: ActionTypes.UpdateSuccess, payload: { user }});
