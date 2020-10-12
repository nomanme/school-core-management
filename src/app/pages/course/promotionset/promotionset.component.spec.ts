import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsetComponent } from './promotionset.component';

describe('PromotionsetComponent', () => {
  let component: PromotionsetComponent;
  let fixture: ComponentFixture<PromotionsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
