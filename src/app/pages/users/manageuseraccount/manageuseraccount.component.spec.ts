import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageuseraccountComponent } from './manageuseraccount.component';

describe('ManageuseraccountComponent', () => {
  let component: ManageuseraccountComponent;
  let fixture: ComponentFixture<ManageuseraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageuseraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageuseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
