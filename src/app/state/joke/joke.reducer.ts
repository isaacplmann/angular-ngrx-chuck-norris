import { Action, createReducer, on } from '@ngrx/store';
import { Joke } from '../../models';
import * as JokeAPIActions from './api.actions';
import * as JokeUIActions from './ui.actions';

export interface State {
  jokes: Joke[];
  isLoading: boolean;
  error: string;
}

export const jokeFeatureKey = 'joke';

export const initialState: State = {
  jokes: [],
  isLoading: false,
  error: ''
};

const jokeReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return jokeReducer(state, action);
}
