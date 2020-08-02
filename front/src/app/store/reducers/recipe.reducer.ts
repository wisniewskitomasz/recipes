import { RecipeState } from '../../models/recipe';
import * as RecipeActions from './../actions/recipe.actions';
import { AppState } from 'src/app/models/app-state.model';


const initialState: RecipeState = {
    list: []
};

export function RecipeReducer(
    state: RecipeState = initialState,
    action: RecipeActions.Actions
) {
    switch(action.type) {
        case RecipeActions.LOAD_RECIPE:
            return { ...state }
        case RecipeActions.LOAD_RECIPE_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
        case RecipeActions.ADD_RECIPE:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case RecipeActions.REMOVE_RECIPE:
            return {
                ...state,
                list: state.list.filter(recipe => recipe.id != action.payload)
            }
        default:
            return state;
    }
}