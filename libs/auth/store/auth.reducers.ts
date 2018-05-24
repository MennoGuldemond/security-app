import * as authActions from './auth.actions';

export interface IAuthState {
  isAuthenticated: boolean;
  token: string;
  dificulty: string;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  token: localStorage.getItem('token') || '',
  dificulty: 'easy'
};

export function authReducer(state = initialState, action: authActions.AuthActions) {
  switch (action.type) {
    case (authActions.SET_TOKEN): {
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true
      };
    }
    case (authActions.LOGOUT): {
      return {
        ...state,
        isAuthenticated: false
      };
    }
    case (authActions.SET_DIFICULTY): {
      return {
        ...state,
        dificulty: action.payload
      };
    }
    default:
      return state;
  }
}
