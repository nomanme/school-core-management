import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlanguageinfoComponent } from './editlanguageinfo.component';

describe('EditlanguageinfoComponent', () => {
  let component: EditlanguageinfoComponent;
  let fixture: ComponentFixture<EditlanguageinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlanguageinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlanguageinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
