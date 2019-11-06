import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { JokeUIActions } from './state/joke';
import { Joke } from './models';
import { JokeService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jokes: Joke[] = [];
  isLoading = false;
  error: string;

  constructor(private store: Store<{}>, private jokeService: JokeService) {}

  ngOnInit() {
    this.jokeService.getJokes().subscribe(jokes => (this.jokes = jokes));
  }

  onLoadAllRequested() {
    this.jokeService.getJokes().subscribe(jokes => (this.jokes = jokes));
  }

  onLoadCategoryRequested(category: string) {
    this.jokeService
      .getJokesByCategory(category)
      .subscribe(jokes => (this.jokes = jokes));
  }
}
