import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ListingNavigationComponent } from './listing-navigation.component';

describe('ListingNavigationComponent', () => {
  let component: ListingNavigationComponent;
  let fixture: ComponentFixture<ListingNavigationComponent>;
  let router: Router;
  let spy: jasmine.Spy<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingNavigationComponent ],
      imports: [RouterTestingModule.withRoutes([])],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingNavigationComponent);
    router = TestBed.inject(Router);
    spy = spyOn<Router, any>(router, 'navigateByUrl');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('route should be "listing/car"', () => {
    component.navigate('car');
    expect(spy.calls.first().args[0]).toBe('listing/car');
  });
});
