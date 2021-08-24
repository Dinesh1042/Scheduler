import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassStatusFormComponent } from './admin-class-status-form.component';

describe('AdminClassStatusFormComponent', () => {
  let component: AdminClassStatusFormComponent;
  let fixture: ComponentFixture<AdminClassStatusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClassStatusFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
