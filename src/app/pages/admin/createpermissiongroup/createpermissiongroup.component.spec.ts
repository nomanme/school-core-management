import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepermissiongroupComponent } from './createpermissiongroup.component';

describe('CreatepermissiongroupComponent', () => {
  let component: CreatepermissiongroupComponent;
  let fixture: ComponentFixture<CreatepermissiongroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepermissiongroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepermissiongroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
