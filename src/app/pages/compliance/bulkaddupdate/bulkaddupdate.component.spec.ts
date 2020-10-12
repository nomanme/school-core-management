import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkaddupdateComponent } from './bulkaddupdate.component';

describe('BulkaddupdateComponent', () => {
  let component: BulkaddupdateComponent;
  let fixture: ComponentFixture<BulkaddupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkaddupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkaddupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
