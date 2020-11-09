import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChecklistsetupComponent } from './checklistsetup.component';

describe('ChecklistsetupComponent', () => {
  let component: ChecklistsetupComponent;
  let fixture: ComponentFixture<ChecklistsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistsetupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
