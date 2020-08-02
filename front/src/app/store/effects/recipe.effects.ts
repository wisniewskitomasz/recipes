import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as RecipeActions from './../actions/recipe.actions';
import { RecipeService } from './../../services/recipe-service.service'
import { mergeMap, map, switchMap, takeUntil } from 'rxjs/operators';

@Injectable()
export class RecipeEffects {

    @Effect() loadRecipes$ = this.actions$
        .pipe(
            ofType<RecipeActions.LoadRecipes>(RecipeActions.LOAD_RECIPE),
            mergeMap(
                () => this.recipeService.loadRecipes()
                .pipe(
                    map(data => {
                        return new RecipeActions.LoadRecipesSuccess(Object.values(data))
                    })
               )
            )
        );

    constructor(
        private actions$: Actions,
        private recipeService: RecipeService
    ) {}
}