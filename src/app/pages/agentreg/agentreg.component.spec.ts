import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentregComponent } from './agentreg.component';

describe('AgentregComponent', () => {
  let component: AgentregComponent;
  let fixture: ComponentFixture<AgentregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
