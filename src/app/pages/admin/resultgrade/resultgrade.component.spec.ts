import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultgradeComponent } from './resultgrade.component';


describe('ResultgradeComponent', () => {
  let component: ResultgradeComponent;
  let fixture: ComponentFixture<ResultgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
