import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentenrolmentComponent } from './edit-studentenrolment.component';

describe('EditStudentenrolmentComponent', () => {
  let component: EditStudentenrolmentComponent;
  let fixture: ComponentFixture<EditStudentenrolmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudentenrolmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentenrolmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
