import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ListingColorDetailComponent } from './listing-color-detail.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('ListingColorDetailComponent', () => {
  let component: ListingColorDetailComponent;
  let fixture: ComponentFixture<ListingColorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingColorDetailComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule, 
        RouterTestingModule
      ], 
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
