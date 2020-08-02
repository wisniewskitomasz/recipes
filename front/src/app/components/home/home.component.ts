import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../models/app-state.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recipes$: Observable<any>;
  constructor(private store: Store<AppState>) {
    this.recipes$ = this.store.select(store => store.recipe.list)
  }

  ngOnInit(): void { }
}
