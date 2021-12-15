import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";

import { ListingCarDetailComponent } from './listing-car-detail.component';


describe('ListingCarDetailComponent', () => {
  let component: ListingCarDetailComponent;
  let fixture: ComponentFixture<ListingCarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingCarDetailComponent ],
      imports: [
        HttpClientTestingModule, 
        ReactiveFormsModule, 
        RouterTestingModule,
      ], 
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
