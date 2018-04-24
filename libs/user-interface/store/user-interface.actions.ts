import { Action } from '@ngrx/store';

import { ITheme } from '../models/theme.model';

export const SET_THEME = 'SET_THEME';

export class SetTheme implements Action {
  readonly type = SET_THEME;
  constructor(public payload: ITheme) {}
}

export type UserInterfaceActions =
  SetTheme;
