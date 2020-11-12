import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainingOrganizationComponent } from './edit-training-organization.component';

describe('EditTrainingOrganizationComponent', () => {
  let component: EditTrainingOrganizationComponent;
  let fixture: ComponentFixture<EditTrainingOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrainingOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrainingOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
