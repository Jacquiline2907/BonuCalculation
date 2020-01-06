import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAcquisitionBonusComponent } from './customer-acquisition-bonus.component';

describe('CustomerAcquisitionBonusComponent', () => {
  let component: CustomerAcquisitionBonusComponent;
  let fixture: ComponentFixture<CustomerAcquisitionBonusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAcquisitionBonusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAcquisitionBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
