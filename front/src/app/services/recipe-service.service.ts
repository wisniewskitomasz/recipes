import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../models/app-state.model';
import { Store } from '@ngrx/store';
import { LoadRecipes } from '../store/actions/recipe.actions';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  private RECIPES_URL = "http://localhost:9000"

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) { }

  loadRecipes() {
    return this.http.get(`${this.RECIPES_URL}/api/read`);
  }
  loadRecipe(id: string) {
    let data = { id: id };
    this.http.post(`${this.RECIPES_URL}/api/read/item`, data).subscribe(data => console.log('load recipe'));
    return this.http.get(`${this.RECIPES_URL}/api/read/item`);
  }

  createRecipe(data: any) {
    return this.http.post(`${this.RECIPES_URL}/api/create`, data).subscribe(data => console.log('create recipe'));
  }

  removeRecipe(id: any) {
    let data = { id: id };
    this.http.post(`${this.RECIPES_URL}/api/delete`, data).subscribe(data => console.log('remove recipe'));
  }
}
