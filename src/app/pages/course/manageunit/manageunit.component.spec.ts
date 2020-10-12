import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageunitComponent } from './manageunit.component';

describe('ManageunitComponent', () => {
  let component: ManageunitComponent;
  let fixture: ComponentFixture<ManageunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
