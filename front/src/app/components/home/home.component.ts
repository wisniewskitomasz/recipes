import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Recipe } from 'src/app/models/recipe';
import * as RecipeActions from 'src/app/store/actions/recipe.actions';
import { AppState } from './../../models/app-state.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipes$: Observable<Recipe[]>;
  constructor(private store: Store<AppState>) {
    this.recipes$ = this.store.select(store => store.recipe)
  }

  ngOnInit(): void {
    this.recipes$.subscribe(data => {
      console.log(data);
    })
  }

  removeRecipe(id: number) {
    this.store.dispatch(new RecipeActions.RemoveRecipe(id))
    this.recipes$.subscribe(r => console.log(r));
  }
}
