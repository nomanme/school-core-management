import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicefacilitysetupComponent } from './servicefacilitysetup.component';

describe('ServicefacilitysetupComponent', () => {
  let component: ServicefacilitysetupComponent;
  let fixture: ComponentFixture<ServicefacilitysetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicefacilitysetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicefacilitysetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
