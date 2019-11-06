import { createAction, props } from '@ngrx/store';
import { Joke } from 'src/app/models';

export const loadAllJokesSucceeded = createAction(
  '[Jokes API] Load All Jokes Succeeded',
  props<{ jokes: Joke[] }>()
);
export const loadAllJokesFailed = createAction(
  '[Jokes API] Load All Jokes Failed',
  props<{ message: string }>()
);
