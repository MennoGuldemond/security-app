import { ActionReducerMap } from '@ngrx/store';

import * as fromUserInterface from '@scrty/user-interface/store/user-interface.reducers';
import * as fromAuth from '@scrty/auth/store/auth.reducers';

export interface IAppState {
  auth: fromAuth.IAuthState;
  userInterface: fromUserInterface.IUserInterfaceState;
}

export const reducers: ActionReducerMap<IAppState> = {
  auth: fromAuth.authReducer,
  userInterface: fromUserInterface.userInterfaceReducer
};
