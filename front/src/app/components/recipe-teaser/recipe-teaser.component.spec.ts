import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeTeaserComponent } from './recipe-teaser.component';

describe('RecipeTeaserComponent', () => {
  let component: RecipeTeaserComponent;
  let fixture: ComponentFixture<RecipeTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
