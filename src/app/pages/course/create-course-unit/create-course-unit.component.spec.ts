import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseUnitComponent } from './create-course-unit.component';

describe('CreateCourseUnitComponent', () => {
  let component: CreateCourseUnitComponent;
  let fixture: ComponentFixture<CreateCourseUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
