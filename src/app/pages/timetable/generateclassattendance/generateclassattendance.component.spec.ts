import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateclassattendanceComponent } from './generateclassattendance.component';

describe('GenerateclassattendanceComponent', () => {
  let component: GenerateclassattendanceComponent;
  let fixture: ComponentFixture<GenerateclassattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateclassattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateclassattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
