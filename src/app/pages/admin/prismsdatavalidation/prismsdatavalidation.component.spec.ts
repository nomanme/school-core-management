import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismsdatavalidationComponent } from './prismsdatavalidation.component';

describe('PrismsdatavalidationComponent', () => {
  let component: PrismsdatavalidationComponent;
  let fixture: ComponentFixture<PrismsdatavalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismsdatavalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismsdatavalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
