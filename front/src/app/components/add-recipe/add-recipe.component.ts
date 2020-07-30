import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/models/app-state.model';
import { Store } from '@ngrx/store';
import * as RecipeActions from './../../store/actions/recipe.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  recipeName: string;
  recipeDescription: string;
  recipeIngredients: string;
  recipePreparing: string;
  preparingTime: Array<string> = ["15 min", "30 min", "45 min", "1 hour", "1 hour 30 min", "2 hours", "3 hours"];
  time: number = 0;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void { }

  addRecipe(data: any) {
    this.store.dispatch(new RecipeActions.AddRecipe(data.value));
    this.router.navigateByUrl('/');
  }

}
