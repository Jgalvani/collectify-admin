import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCarDetailComponent } from './listing-car-detail.component';

describe('ListingCarDetailComponent', () => {
  let component: ListingCarDetailComponent;
  let fixture: ComponentFixture<ListingCarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingCarDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
