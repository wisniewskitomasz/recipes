import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeComponent } from './components/recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddRecipeComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
