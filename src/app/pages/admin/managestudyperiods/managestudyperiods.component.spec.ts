import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestudyperiodsComponent } from './managestudyperiods.component';

describe('ManagestudyperiodsComponent', () => {
  let component: ManagestudyperiodsComponent;
  let fixture: ComponentFixture<ManagestudyperiodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagestudyperiodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagestudyperiodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
