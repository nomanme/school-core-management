import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentfeeComponent } from './enrollmentfee.component';

describe('EnrollmentfeeComponent', () => {
  let component: EnrollmentfeeComponent;
  let fixture: ComponentFixture<EnrollmentfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
