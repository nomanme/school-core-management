import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementhomeComponent } from './managementhome.component';

describe('ManagementhomeComponent', () => {
  let component: ManagementhomeComponent;
  let fixture: ComponentFixture<ManagementhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
