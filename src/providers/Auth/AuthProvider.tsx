import React, { useContext, useReducer } from 'react';
import notImplemented from '@/utils/not-implemented';
import {
  AuthContext as AuthContextInterface,
  AuthState,
  AuthReducerAction
} from './auth-types';

const DEFAULT_AUTH_STATE: AuthState = {
  loggedIn: false,
  user: undefined
};

const AuthContext = React.createContext<AuthContextInterface>({
  ...DEFAULT_AUTH_STATE,
  login: notImplemented,
  logout: notImplemented,
  register: notImplemented
});

const authReducer: React.Reducer<AuthState, AuthReducerAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'login':
      return { loggedIn: true, user: action.payload };
    case 'logout':
      return DEFAULT_AUTH_STATE;
    case 'register':
      return DEFAULT_AUTH_STATE;
    default:
      return DEFAULT_AUTH_STATE;
  }
};

export default function AuthProvider(props: { children: React.ReactNode }) {
  const [authState, dispatch] = useReducer(authReducer, {
    loggedIn: false,
    user: undefined
  });

  function login(user: { username: string; password: string }) {
    dispatch({ type: 'login', payload: user });
    return Promise.resolve(true);
  }

  function logout() {
    dispatch({ type: 'logout' });
    return Promise.resolve(true);
  }

  function register(userdata: { [key: string]: string }) {
    dispatch({ type: 'register', payload: userdata });
    return Promise.resolve(true);
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        register
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (authContext === null) {
    throw new Error(
      'The `useAuth` hook must be used within an `AuthProvider`.'
    );
  }
}
