import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainingOrganizationComponent } from './create-training-organization.component';

describe('CreateTrainingOrganizationComponent', () => {
  let component: CreateTrainingOrganizationComponent;
  let fixture: ComponentFixture<CreateTrainingOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTrainingOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrainingOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
