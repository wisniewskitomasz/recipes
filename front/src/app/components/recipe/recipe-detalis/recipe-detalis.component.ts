import { Component, OnInit } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.model';
import { RecipeService } from 'src/app/services/recipe-service.service';
import { takeUntil } from 'rxjs/operators';
import { RemoveRecipe, LoadRecipes } from 'src/app/store/actions/recipe.actions';

@Component({
  selector: 'app-recipe-detalis',
  templateUrl: './recipe-detalis.component.html',
  styleUrls: ['./recipe-detalis.component.scss']
})
export class RecipeDetalisComponent implements OnInit {

  subscription: Subscription;
  recipe: any =[];
  recipeId: string;
  recipes$: any;
  recipes: any;
  destroy: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private service: RecipeService,
    private router: Router
  ) {
    this.recipes$ = this.store.select(store => store.recipe.list)
  }

  ngOnInit(): void {
    this.subscription = this.route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      this.recipeId = params.id;
      this.recipes$.pipe(takeUntil(this.destroy)).subscribe(data => {
        this.recipe = data.filter(el => el.id == this.recipeId);
        this.recipe = this.recipe[0];
      })
    });
  }
  remove() {
    this.service.removeRecipe(this.recipeId);
    this.store.dispatch(new RemoveRecipe(this.recipeId))
    this.router.navigateByUrl('/');
  }
  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

}
