import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseIntakeDateComponent } from './create-course-intake-date.component';

describe('CreateCourseIntakeDateComponent', () => {
  let component: CreateCourseIntakeDateComponent;
  let fixture: ComponentFixture<CreateCourseIntakeDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseIntakeDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseIntakeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
