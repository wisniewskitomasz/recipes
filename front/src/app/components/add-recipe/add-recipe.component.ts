import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/models/app-state.model';
import { Store } from '@ngrx/store';
import * as RecipeActions from './../../store/actions/recipe.actions';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe-service.service';
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
  foodType: string = 'snack';

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private service: RecipeService) { }

  ngOnInit(): void { }

  addRecipe(data: any) {
    data.value.id = Math.floor(Math.random() * 10000000000000000);
    this.store.dispatch(new RecipeActions.AddRecipe(data.value));
    this.service.createRecipe(data.value);
    this.router.navigateByUrl('/');
  }

}
