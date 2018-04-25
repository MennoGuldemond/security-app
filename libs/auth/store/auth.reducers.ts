import * as authActions from './auth.actions';

export interface IAuthState {
  isAuthenticated: boolean;
  token: string;
  username: string;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  token: localStorage.getItem('token') || '',
  username: ''
};

export function authReducer(state = initialState, action: authActions.AuthActions) {
  switch (action.type) {
    case (authActions.SET_TOKEN): {
      return {
        ...state,
        token: action.payload
      };
    }
    default:
      return state;
  }
}
