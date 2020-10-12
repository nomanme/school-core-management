import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateclasstimetableComponent } from './createclasstimetable.component';

describe('CreateclasstimetableComponent', () => {
  let component: CreateclasstimetableComponent;
  let fixture: ComponentFixture<CreateclasstimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateclasstimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateclasstimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
