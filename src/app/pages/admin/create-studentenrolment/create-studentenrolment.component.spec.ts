import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentenrolmentComponent } from './create-studentenrolment.component';

describe('CreateStudentenrolmentComponent', () => {
  let component: CreateStudentenrolmentComponent;
  let fixture: ComponentFixture<CreateStudentenrolmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStudentenrolmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudentenrolmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
