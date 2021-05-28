import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTypeListComponent } from './tour-type-list.component';

describe('TourTypeListComponent', () => {
  let component: TourTypeListComponent;
  let fixture: ComponentFixture<TourTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
