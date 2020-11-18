import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseIntakeDateComponent } from './course-intake-date.component';

describe('CourseIntakeDateComponent', () => {
  let component: CourseIntakeDateComponent;
  let fixture: ComponentFixture<CourseIntakeDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseIntakeDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseIntakeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
