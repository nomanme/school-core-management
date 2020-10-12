import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteractivitydetailComponent } from './registeractivitydetail.component';

describe('RegisteractivitydetailComponent', () => {
  let component: RegisteractivitydetailComponent;
  let fixture: ComponentFixture<RegisteractivitydetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteractivitydetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteractivitydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
