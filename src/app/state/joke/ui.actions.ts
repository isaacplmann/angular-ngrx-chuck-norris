import { createAction, props } from '@ngrx/store';

export const initialized = createAction('[App Component] Initialized');

export const loadAllJokesRequested = createAction(
  '[App Component] Load All Jokes Requested'
);
