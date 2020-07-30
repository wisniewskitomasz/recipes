import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipe';
import { AppState } from 'src/app/models/app-state.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  sub;
  recipe;
  recipes$: Observable<Recipe[]>;
  constructor(private route: ActivatedRoute,
    private store: Store<AppState>) {
      this.recipes$ = this.store.select(store => store.recipe)
    }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      console.log(params);
    });

    this.recipes$.subscribe(data => {
      console.log(data);
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
