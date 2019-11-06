import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromJoke from './joke.reducer';

// Lookup the 'Joke' feature state managed by NgRx
export const getJokeFeature = createFeatureSelector<fromJoke.State>(
  fromJoke.jokeFeatureKey
);

export const selectJokeList = createSelector(
  getJokeFeature,
  state => state.jokes
);
export const selectJokeIsLoading = createSelector(
  getJokeFeature,
  state => state.isLoading
);
export const selectJokeError = createSelector(
  getJokeFeature,
  state => state.error
);
export const selectJokeFirstName = createSelector(
  getJokeFeature,
  state => state.firstName
);
export const selectJokeLastName = createSelector(
  getJokeFeature,
  state => state.lastName
);
export const selectJokeFullName = createSelector(
  selectJokeFirstName,
  selectJokeLastName,
  (firstName, lastName) => `${firstName} ${lastName}`
);
