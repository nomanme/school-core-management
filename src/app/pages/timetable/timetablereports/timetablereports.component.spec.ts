import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetablereportsComponent } from './timetablereports.component';

describe('TimetablereportsComponent', () => {
  let component: TimetablereportsComponent;
  let fixture: ComponentFixture<TimetablereportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetablereportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetablereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
