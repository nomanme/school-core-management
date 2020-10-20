import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentenrolmentComponent } from './studentenrolment.component';

describe('StudentenrolmentComponent', () => {
  let component: StudentenrolmentComponent;
  let fixture: ComponentFixture<StudentenrolmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentenrolmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentenrolmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
