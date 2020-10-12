import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecourseinitialComponent } from './managecourseinitial.component';

describe('ManagecourseinitialComponent', () => {
  let component: ManagecourseinitialComponent;
  let fixture: ComponentFixture<ManagecourseinitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecourseinitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecourseinitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
