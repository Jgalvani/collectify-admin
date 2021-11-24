import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingNavigationComponent } from './listing-navigation.component';

describe('ListingNavigationComponent', () => {
  let component: ListingNavigationComponent;
  let fixture: ComponentFixture<ListingNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
