import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesystemreportComponent } from './managesystemreport.component';

describe('ManagesystemreportComponent', () => {
  let component: ManagesystemreportComponent;
  let fixture: ComponentFixture<ManagesystemreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesystemreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesystemreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
