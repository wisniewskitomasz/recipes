import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, Subject } from 'rxjs';
import { Recipe } from 'src/app/models/recipe';
import { AppState } from 'src/app/models/app-state.model';
import { Store } from '@ngrx/store';
import { LoadRecipes, RemoveRecipe } from 'src/app/store/actions/recipe.actions';
import { RecipeService } from 'src/app/services/recipe-service.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
