import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateidformatComponent } from './certificateidformat.component';

describe('CertificateidformatComponent', () => {
  let component: CertificateidformatComponent;
  let fixture: ComponentFixture<CertificateidformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateidformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateidformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
