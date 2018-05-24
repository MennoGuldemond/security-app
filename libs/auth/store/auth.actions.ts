import { Action } from '@ngrx/store';

export const SET_TOKEN = 'SET_TOKEN';
export const LOGOUT = 'LOGOUT';
export const SET_DIFICULTY = 'SET_DIFICULTY';

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) { }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetDificulty implements Action {
  readonly type = SET_DIFICULTY;
  constructor(public payload: string) { }
}

export type AuthActions =
  SetToken |
  Logout |
  SetDificulty;
