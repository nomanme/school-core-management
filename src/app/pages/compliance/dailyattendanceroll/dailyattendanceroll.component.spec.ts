import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyattendancerollComponent } from './dailyattendanceroll.component';

describe('DailyattendancerollComponent', () => {
  let component: DailyattendancerollComponent;
  let fixture: ComponentFixture<DailyattendancerollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyattendancerollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyattendancerollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
