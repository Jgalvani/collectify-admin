import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { ListingCarComponent } from "./listing-car.component";

describe("ListingCarComponent", () => {
  let component: ListingCarComponent;
  let fixture: ComponentFixture<ListingCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingCarComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
