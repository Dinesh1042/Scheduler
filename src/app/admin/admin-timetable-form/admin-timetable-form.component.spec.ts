import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTimetableFormComponent } from './admin-timetable-form.component';

describe('AdminTimetableFormComponent', () => {
  let component: AdminTimetableFormComponent;
  let fixture: ComponentFixture<AdminTimetableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTimetableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTimetableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
