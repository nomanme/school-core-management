import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagevenueComponent } from './managevenue.component';

describe('ManagevenueComponent', () => {
  let component: ManagevenueComponent;
  let fixture: ComponentFixture<ManagevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagevenueComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
