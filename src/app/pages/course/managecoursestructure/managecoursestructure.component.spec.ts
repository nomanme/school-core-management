import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecoursestructureComponent } from './managecoursestructure.component';

describe('ManagecoursestructureComponent', () => {
  let component: ManagecoursestructureComponent;
  let fixture: ComponentFixture<ManagecoursestructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagecoursestructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecoursestructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
