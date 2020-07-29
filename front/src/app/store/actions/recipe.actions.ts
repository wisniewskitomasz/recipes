import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Recipe } from '../../models/recipe';


export const ADD_RECIPE = '[RECIPE] Add';
export const REMOVE_RECIPE = '[RECIPE] Remove';

export class AddRecipe implements Action {
    readonly type = ADD_RECIPE

    constructor(public payload: Recipe) {}
}

export class RemoveRecipe implements Action {
    readonly type = REMOVE_RECIPE

    constructor(public payload: number) {}
}

export type Actions = AddRecipe | RemoveRecipe;