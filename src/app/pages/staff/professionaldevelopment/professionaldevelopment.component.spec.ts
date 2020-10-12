import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionaldevelopmentComponent } from './professionaldevelopment.component';

describe('ProfessionaldevelopmentComponent', () => {
  let component: ProfessionaldevelopmentComponent;
  let fixture: ComponentFixture<ProfessionaldevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionaldevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionaldevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
