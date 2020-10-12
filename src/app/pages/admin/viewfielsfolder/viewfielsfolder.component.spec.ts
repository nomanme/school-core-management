import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfielsfolderComponent } from './viewfielsfolder.component';

describe('ViewfielsfolderComponent', () => {
  let component: ViewfielsfolderComponent;
  let fixture: ComponentFixture<ViewfielsfolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfielsfolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfielsfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
