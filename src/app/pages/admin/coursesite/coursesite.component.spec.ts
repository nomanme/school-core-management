import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesiteComponent } from './coursesite.component';

describe('CoursesiteComponent', () => {
  let component: CoursesiteComponent;
  let fixture: ComponentFixture<CoursesiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
