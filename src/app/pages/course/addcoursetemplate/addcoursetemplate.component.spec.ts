import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcoursetemplateComponent } from './addcoursetemplate.component';

describe('AddcoursetemplateComponent', () => {
  let component: AddcoursetemplateComponent;
  let fixture: ComponentFixture<AddcoursetemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcoursetemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcoursetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
