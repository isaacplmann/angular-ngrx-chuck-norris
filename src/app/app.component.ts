import { Component, OnInit } from '@angular/core';
import { Store, createSelector } from '@ngrx/store';
import {
  JokeUIActions,
  selectJokeList,
  selectJokeIsLoading,
  selectJokeError,
  selectJokeFullName
} from './state/joke';

const selectAppComponentViewModel = createSelector(
  selectJokeList,
  selectJokeIsLoading,
  selectJokeError,
  selectJokeFullName,
  (jokes, isLoading, error, fullName) => ({
    jokes,
    isLoading,
    error,
    fullName
  })
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // local component state
  // only this component cares about it
  // does not need to be saved

  // ngrx
  // if other components are concerned about it
  // undo/redo
  // track changes

  // individual input values
  //  submitted form

  isCollapsed: boolean;

  vm$ = this.store.select(selectAppComponentViewModel);

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.store.dispatch(JokeUIActions.initialized());
  }

  onLoadAllRequested() {
    this.store.dispatch(JokeUIActions.loadAllJokesRequested());
  }

  onLoadCategoryRequested(category: string) {}
}
