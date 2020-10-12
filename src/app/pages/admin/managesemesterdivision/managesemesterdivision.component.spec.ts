import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesemesterdivisionComponent } from './managesemesterdivision.component';

describe('ManagesemesterdivisionComponent', () => {
  let component: ManagesemesterdivisionComponent;
  let fixture: ComponentFixture<ManagesemesterdivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesemesterdivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesemesterdivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
