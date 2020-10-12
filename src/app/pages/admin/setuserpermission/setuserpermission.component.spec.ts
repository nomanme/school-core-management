import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetuserpermissionComponent } from './setuserpermission.component';

describe('SetuserpermissionComponent', () => {
  let component: SetuserpermissionComponent;
  let fixture: ComponentFixture<SetuserpermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetuserpermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetuserpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
