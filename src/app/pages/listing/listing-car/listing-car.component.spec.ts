import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCarComponent } from './listing-car.component';

describe('ListingCarComponent', () => {
  let component: ListingCarComponent;
  let fixture: ComponentFixture<ListingCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
