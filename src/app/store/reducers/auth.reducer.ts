import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure, logout } from '../actions/auth.actions';
import { User } from '../../core/models/user.model';

export interface AuthState {
  user: User | null;
  error: string | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  user: null,
  error: null,
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    error: null
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    isAuthenticated: false
  })),
  on(logout, state => ({
    ...state,
    user: null,
    isAuthenticated: false
  }))
);
