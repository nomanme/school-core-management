import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpostaldetailsComponent } from './studentpostaldetails.component';

describe('StudentpostaldetailsComponent', () => {
  let component: StudentpostaldetailsComponent;
  let fixture: ComponentFixture<StudentpostaldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentpostaldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpostaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
