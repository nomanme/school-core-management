import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntakedatesComponent } from './intakedates.component';

describe('IntakedatesComponent', () => {
  let component: IntakedatesComponent;
  let fixture: ComponentFixture<IntakedatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntakedatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntakedatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
