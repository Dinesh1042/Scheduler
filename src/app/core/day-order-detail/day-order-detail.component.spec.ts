import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOrderDetailComponent } from './day-order-detail.component';

describe('DayOrderDetailComponent', () => {
  let component: DayOrderDetailComponent;
  let fixture: ComponentFixture<DayOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayOrderDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
