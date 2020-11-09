import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemfieldsetupComponent } from './systemfieldsetup.component';

describe('SystemfieldsetupComponent', () => {
  let component: SystemfieldsetupComponent;
  let fixture: ComponentFixture<SystemfieldsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SystemfieldsetupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemfieldsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
