import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseIntakeDateComponent } from './view-course-intake-date.component';

describe('ViewCourseIntakeDateComponent', () => {
  let component: ViewCourseIntakeDateComponent;
  let fixture: ComponentFixture<ViewCourseIntakeDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCourseIntakeDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCourseIntakeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
