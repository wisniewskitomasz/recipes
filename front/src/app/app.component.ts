import { Component } from '@angular/core';
import { LoadRecipes } from './store/actions/recipe.actions';
import { AppState } from './models/app-state.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadRecipes());
  }

  ngOnInit() {
  }
}
