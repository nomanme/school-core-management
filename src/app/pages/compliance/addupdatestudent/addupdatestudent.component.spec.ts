import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdatestudentComponent } from './addupdatestudent.component';

describe('AddupdatestudentComponent', () => {
  let component: AddupdatestudentComponent;
  let fixture: ComponentFixture<AddupdatestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddupdatestudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddupdatestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
