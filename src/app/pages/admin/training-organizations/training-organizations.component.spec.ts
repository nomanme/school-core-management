import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingOrganizationsComponent } from './training-organizations.component';

describe('TrainingOrganizationsComponent', () => {
  let component: TrainingOrganizationsComponent;
  let fixture: ComponentFixture<TrainingOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
