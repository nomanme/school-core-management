import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecontractscheduleComponent } from './managecontractschedule.component';

describe('ManagecontractscheduleComponent', () => {
  let component: ManagecontractscheduleComponent;
  let fixture: ComponentFixture<ManagecontractscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecontractscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecontractscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
