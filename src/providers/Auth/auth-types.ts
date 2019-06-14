export interface User {
  username: string;
  [key: string]: any;
}

export interface AuthState {
  loggedIn: boolean;
  user?: User;
}

interface AuthReducerLoginAction {
  type: 'login';
  payload: { username: string; password: string };
}

interface AuthReducerLogoutAction {
  type: 'logout';
}

interface AuthReducerRegisterAction {
  type: 'register';
  payload: { [key: string]: string };
}

export type AuthReducerAction =
  | AuthReducerLoginAction
  | AuthReducerLogoutAction
  | AuthReducerRegisterAction;

export interface AuthContext extends AuthState {
  login: (user: { username: string; password: string }) => Promise<boolean>;
  logout: () => Promise<boolean>;
  register: (userdata: { [key: string]: string }) => Promise<boolean>;
}
