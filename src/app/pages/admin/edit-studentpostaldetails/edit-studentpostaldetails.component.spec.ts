import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentpostaldetailsComponent } from './edit-studentpostaldetails.component';

describe('EditStudentpostaldetailsComponent', () => {
  let component: EditStudentpostaldetailsComponent;
  let fixture: ComponentFixture<EditStudentpostaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudentpostaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentpostaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
