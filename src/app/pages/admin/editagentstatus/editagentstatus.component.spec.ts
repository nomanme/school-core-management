import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditagentstatusComponent } from './editagentstatus.component';

describe('EditagentstatusComponent', () => {
  let component: EditagentstatusComponent;
  let fixture: ComponentFixture<EditagentstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditagentstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditagentstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
