import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewsubjectComponent } from './addnewsubject.component';

describe('AddnewsubjectComponent', () => {
  let component: AddnewsubjectComponent;
  let fixture: ComponentFixture<AddnewsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
