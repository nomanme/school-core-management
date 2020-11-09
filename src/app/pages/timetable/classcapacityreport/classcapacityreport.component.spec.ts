import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasscapacityreportComponent } from './classcapacityreport.component';

describe('ClasscapacityreportComponent', () => {
  let component: ClasscapacityreportComponent;
  let fixture: ComponentFixture<ClasscapacityreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClasscapacityreportComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasscapacityreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
