import * as UserInterfaceActions from './user-interface.actions';

import { ITheme } from '../models/theme.model';

export interface IUserInterfaceState {
  theme: ITheme;
}

const initialState: IUserInterfaceState = {
  theme: { 'label': 'Default', 'name': 'default' }
};

export function userInterfaceReducer(state = initialState, action: UserInterfaceActions.UserInterfaceActions) {
  switch (action.type) {
    case (UserInterfaceActions.SET_THEME): {
      return {
        ...state,
        theme: action.payload
      };
    }
    default:
      return state;
  }
}
