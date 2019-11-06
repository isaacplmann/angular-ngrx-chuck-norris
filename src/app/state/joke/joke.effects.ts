import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { JokeService } from '../../services';
import * as JokeAPIActions from './api.actions';
import * as JokeUIActions from './ui.actions';

@Injectable()
export class JokeStoreEffects {
  constructor(private jokeService: JokeService, private actions$: Actions) {}

  // loadAllJokes
  loadAllJokes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JokeUIActions.initialized, JokeUIActions.loadAllJokesRequested),
      mergeMap(() =>
        this.jokeService.getJokes().pipe(
          map(data => JokeAPIActions.loadAllJokesSucceeded({ jokes: data })),
          catchError(error =>
            of(JokeAPIActions.loadAllJokesFailed({ message: error.message }))
          )
        )
      )
    )
  );

  // loadCategory

  // showAlertOnFailure
  showAlertOnFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(JokeAPIActions.loadAllJokesFailed),
        /** An EMPTY observable only emits completion. Replace with your own observable stream */
        tap(action => window.alert(action.message))
      ),
    { dispatch: false }
  );
}
