import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalitygroupComponent } from './nationalitygroup.component';

describe('NationalitygroupComponent', () => {
  let component: NationalitygroupComponent;
  let fixture: ComponentFixture<NationalitygroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalitygroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalitygroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
