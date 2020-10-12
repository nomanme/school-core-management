import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageclasstimetableComponent } from './manageclasstimetable.component';

describe('ManageclasstimetableComponent', () => {
  let component: ManageclasstimetableComponent;
  let fixture: ComponentFixture<ManageclasstimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageclasstimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageclasstimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
