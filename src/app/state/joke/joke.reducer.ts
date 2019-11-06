import { Action, createReducer, on } from '@ngrx/store';
import { Joke } from '../../models';
import * as JokeAPIActions from './api.actions';
import * as JokeUIActions from './ui.actions';

export interface State {
  jokes: Joke[];
  isLoading: boolean;
  error: string;
  firstName: string;
  lastName: string;
}

export const jokeFeatureKey = 'joke';

export const initialState: State = {
  jokes: [],
  isLoading: false,
  error: '',
  firstName: 'Joe',
  lastName: 'Van Gundy'
};

const jokeReducer = createReducer(
  initialState,
  on(JokeUIActions.initialized, JokeUIActions.loadAllJokesRequested, state => ({
    ...state,
    isLoading: true
  })),
  on(JokeAPIActions.loadAllJokesSucceeded, (state, action) => ({
    ...state,
    isLoading: false,
    jokes: action.jokes
  })),
  on(JokeAPIActions.loadAllJokesFailed, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.message
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return jokeReducer(state, action);
}
