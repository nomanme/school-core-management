import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventionstrategyComponent } from './inventionstrategy.component';

describe('InventionstrategyComponent', () => {
  let component: InventionstrategyComponent;
  let fixture: ComponentFixture<InventionstrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventionstrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventionstrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
