import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachermatricComponent } from './teachermatric.component';

describe('TeachermatricComponent', () => {
  let component: TeachermatricComponent;
  let fixture: ComponentFixture<TeachermatricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachermatricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachermatricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
