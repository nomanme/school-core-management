import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrainingOrganizationComponent } from './view-training-organization.component';

describe('ViewTrainingOrganizationComponent', () => {
  let component: ViewTrainingOrganizationComponent;
  let fixture: ComponentFixture<ViewTrainingOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTrainingOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrainingOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
