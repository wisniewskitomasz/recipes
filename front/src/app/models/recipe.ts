export interface Recipe {
    name: string;
    description: string;
    id: string;
    ingredients: string;
    preparing: string;
    time: string;
    type: string;
}

export interface RecipeState {
    list: Recipe[]
}