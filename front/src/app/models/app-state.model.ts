import { Recipe } from './recipe'

export interface AppState {
    readonly recipe: Array<Recipe>
}