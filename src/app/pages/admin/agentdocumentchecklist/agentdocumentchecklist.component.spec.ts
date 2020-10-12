import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentdocumentchecklistComponent } from './agentdocumentchecklist.component';

describe('AgentdocumentchecklistComponent', () => {
  let component: AgentdocumentchecklistComponent;
  let fixture: ComponentFixture<AgentdocumentchecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentdocumentchecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentdocumentchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
