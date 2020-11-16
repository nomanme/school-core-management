import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentpostaldetailsComponent } from './create-studentpostaldetails.component';

describe('CreateStudentpostaldetailsComponent', () => {
  let component: CreateStudentpostaldetailsComponent;
  let fixture: ComponentFixture<CreateStudentpostaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStudentpostaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentpostaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
