import { Action } from '@ngrx/store';
import { RecipeState, Recipe } from 'src/app/models/recipe';


export const ADD_RECIPE = '[RECIPE] Add';
export const REMOVE_RECIPE = '[RECIPE] Remove';
export const LOAD_RECIPE = '[RECIPE] Load';
export const LOAD_RECIPE_SUCCESS = '[RECIPE] Load Success';

export class LoadRecipes implements Action {
    readonly type = LOAD_RECIPE
}

export class LoadRecipesSuccess implements Action {
    readonly type = LOAD_RECIPE_SUCCESS

    constructor(public payload: Array<Recipe>) {}
}

export class AddRecipe implements Action {
    readonly type = ADD_RECIPE

    constructor(public payload: Object) {}
}

export class RemoveRecipe implements Action {
    readonly type = REMOVE_RECIPE

    constructor(public payload: any) {}
}

export type Actions = AddRecipe | RemoveRecipe | LoadRecipes | LoadRecipesSuccess;