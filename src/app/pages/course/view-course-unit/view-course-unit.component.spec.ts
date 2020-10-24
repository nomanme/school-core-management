import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseUnitComponent } from './view-course-unit.component';

describe('ViewCourseUnitComponent', () => {
  let component: ViewCourseUnitComponent;
  let fixture: ComponentFixture<ViewCourseUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCourseUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCourseUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
