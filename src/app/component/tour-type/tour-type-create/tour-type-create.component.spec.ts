import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourTypeCreateComponent } from './tour-type-create.component';

describe('TourTypeCreateComponent', () => {
  let component: TourTypeCreateComponent;
  let fixture: ComponentFixture<TourTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourTypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
