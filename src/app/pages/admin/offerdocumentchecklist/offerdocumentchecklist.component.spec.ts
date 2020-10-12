import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdocumentchecklistComponent } from './offerdocumentchecklist.component';

describe('OfferdocumentchecklistComponent', () => {
  let component: OfferdocumentchecklistComponent;
  let fixture: ComponentFixture<OfferdocumentchecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferdocumentchecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferdocumentchecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
