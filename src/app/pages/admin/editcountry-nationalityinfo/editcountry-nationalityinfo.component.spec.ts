import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcountryNationalityinfoComponent } from './editcountry-nationalityinfo.component';

describe('EditcountryNationalityinfoComponent', () => {
  let component: EditcountryNationalityinfoComponent;
  let fixture: ComponentFixture<EditcountryNationalityinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcountryNationalityinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcountryNationalityinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
