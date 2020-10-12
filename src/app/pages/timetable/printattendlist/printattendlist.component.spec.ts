import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintattendlistComponent } from './printattendlist.component';

describe('PrintattendlistComponent', () => {
  let component: PrintattendlistComponent;
  let fixture: ComponentFixture<PrintattendlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintattendlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintattendlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
