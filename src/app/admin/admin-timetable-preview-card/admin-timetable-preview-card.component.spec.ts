import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTimetablePreviewCardComponent } from './admin-timetable-preview-card.component';

describe('AdminTimetablePreviewCardComponent', () => {
  let component: AdminTimetablePreviewCardComponent;
  let fixture: ComponentFixture<AdminTimetablePreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTimetablePreviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTimetablePreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
