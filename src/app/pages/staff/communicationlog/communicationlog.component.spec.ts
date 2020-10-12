import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationlogComponent } from './communicationlog.component';

describe('CommunicationlogComponent', () => {
  let component: CommunicationlogComponent;
  let fixture: ComponentFixture<CommunicationlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
