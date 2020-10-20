import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentenrolmentComponent } from './view-studentenrolment.component';

describe('ViewStudentenrolmentComponent', () => {
  let component: ViewStudentenrolmentComponent;
  let fixture: ComponentFixture<ViewStudentenrolmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudentenrolmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentenrolmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
