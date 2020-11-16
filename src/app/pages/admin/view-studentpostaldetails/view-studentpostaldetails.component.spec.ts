import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentpostaldetailsComponent } from './view-studentpostaldetails.component';

describe('ViewStudentpostaldetailsComponent', () => {
  let component: ViewStudentpostaldetailsComponent;
  let fixture: ComponentFixture<ViewStudentpostaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudentpostaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentpostaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
