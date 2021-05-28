import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTypeListComponent } from './hotel-type-list.component';

describe('HotelTypeListComponent', () => {
  let component: HotelTypeListComponent;
  let fixture: ComponentFixture<HotelTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
