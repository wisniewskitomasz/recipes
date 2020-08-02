import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetalisComponent } from './recipe-detalis.component';

describe('RecipeDetalisComponent', () => {
  let component: RecipeDetalisComponent;
  let fixture: ComponentFixture<RecipeDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
