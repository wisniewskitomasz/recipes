import { Action } from '@ngrx/store';
import { Recipe } from '../../models/recipe';
import * as RecipeActions from './../actions/recipe.actions';

const initialState: Array<Recipe> = [
    {
        name: 'recipe1',
        description: 'test1',
        ingredients: 'this.recipeIngredients',
        preparing: 'this.recipePreparing',
        id: 1,
        time: '30 min'
    },
    {
        name: 'recipe2',
        description: 'test2',
        ingredients: 'this.recipeIngredients2',
        preparing: 'this.recipePreparing2',
        id: 2,
        time: '30 min'
    },
    {
        name: 'recipe3',
        description: 'test3',
        ingredients: 'this.recipeIngredients3',
        preparing: 'this.recipePreparing3',
        id: 3,
        time: '30 min'
    }
]

export function RecipeReducer(
    state: Array<Recipe> = initialState,
    action: RecipeActions.Actions
) {
    switch(action.type) {
        case RecipeActions.ADD_RECIPE:
            return [...state, action.payload];
        case RecipeActions.REMOVE_RECIPE:
            return state.filter(recipe => recipe.id != action.payload)
        default:
            return state;
    }
}