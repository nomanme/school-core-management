import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalemailsetupComponent } from './additionalemailsetup.component';

describe('AdditionalemailsetupComponent', () => {
  let component: AdditionalemailsetupComponent;
  let fixture: ComponentFixture<AdditionalemailsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalemailsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalemailsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
