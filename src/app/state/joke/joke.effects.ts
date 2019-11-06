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

  // loadCategory

  // showAlertOnFailure
}
