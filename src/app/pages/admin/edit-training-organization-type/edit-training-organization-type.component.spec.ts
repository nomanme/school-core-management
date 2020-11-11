import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTrainingOrganizationTypeComponent } from './edit-training-organization-type.component';

describe('EditTrainingOrganizationTypeComponent', () => {
  let component: EditTrainingOrganizationTypeComponent;
  let fixture: ComponentFixture<EditTrainingOrganizationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditTrainingOrganizationTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrainingOrganizationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
