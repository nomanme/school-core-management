import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionactivationComponent } from './promotionactivation.component';

describe('PromotionactivationComponent', () => {
  let component: PromotionactivationComponent;
  let fixture: ComponentFixture<PromotionactivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionactivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
