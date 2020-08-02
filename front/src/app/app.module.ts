import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StoreModule } from '@ngrx/store';
import { RecipeReducer } from './store/reducers/recipe.reducer'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeTeaserComponent } from './components/recipe-teaser/recipe-teaser.component';
import { RecipeEffects } from './store/effects/recipe.effects';
import { RecipeDetalisComponent } from './components/recipe/recipe-detalis/recipe-detalis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AddRecipeComponent,
    RecipeComponent,
    RecipeTeaserComponent,
    RecipeDetalisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot({
      recipe: RecipeReducer
    }),
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([RecipeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
