import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.model';
import { RecipeService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  recipes$: Observable<Array<Recipe>>;
  constructor(
    private store: Store<AppState>,
    private service: RecipeService
  ) {
    this.recipes$ = this.store.select(store => store.recipe.list);
  }

  ngOnInit(): void {

  }

}
