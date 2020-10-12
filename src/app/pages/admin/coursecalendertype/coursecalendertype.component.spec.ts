import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecalendertypeComponent } from './coursecalendertype.component';

describe('CoursecalendertypeComponent', () => {
  let component: CoursecalendertypeComponent;
  let fixture: ComponentFixture<CoursecalendertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursecalendertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecalendertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
