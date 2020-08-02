import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-teaser',
  templateUrl: './recipe-teaser.component.html',
  styleUrls: ['./recipe-teaser.component.scss']
})
export class RecipeTeaserComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }
  test() {
  }
}
