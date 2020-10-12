import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagepermissionsetupComponent } from './pagepermissionsetup.component';

describe('PagepermissionsetupComponent', () => {
  let component: PagepermissionsetupComponent;
  let fixture: ComponentFixture<PagepermissionsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagepermissionsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagepermissionsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
