import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingColorDetailComponent } from './listing-color-detail.component';

describe('ListingColorDetailComponent', () => {
  let component: ListingColorDetailComponent;
  let fixture: ComponentFixture<ListingColorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingColorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingColorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
