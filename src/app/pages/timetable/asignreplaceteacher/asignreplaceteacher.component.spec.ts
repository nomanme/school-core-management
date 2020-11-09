import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignreplaceteacherComponent } from './asignreplaceteacher.component';

describe('AsignreplaceteacherComponent', () => {
  let component: AsignreplaceteacherComponent;
  let fixture: ComponentFixture<AsignreplaceteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsignreplaceteacherComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignreplaceteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
