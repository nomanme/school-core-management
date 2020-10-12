import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverseasstudenthealthComponent } from './overseasstudenthealth.component';

describe('OverseasstudenthealthComponent', () => {
  let component: OverseasstudenthealthComponent;
  let fixture: ComponentFixture<OverseasstudenthealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverseasstudenthealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverseasstudenthealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
