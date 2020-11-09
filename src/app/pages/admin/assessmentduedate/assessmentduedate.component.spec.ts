import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssessmentduedateComponent } from './assessmentduedate.component';

describe('AssessmentduedateComponent', () => {
  let component: AssessmentduedateComponent;
  let fixture: ComponentFixture<AssessmentduedateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentduedateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentduedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
