import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListingColorComponent } from './listing-color.component';

describe('ListingColorComponent', () => {
  let component: ListingColorComponent;
  let fixture: ComponentFixture<ListingColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingColorComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
