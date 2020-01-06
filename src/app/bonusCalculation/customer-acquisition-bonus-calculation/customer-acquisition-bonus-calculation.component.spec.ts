import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAcquisitionBonusCalculationComponent } from './customer-acquisition-bonus-calculation.component';

describe('CustomerAcquisitionBonusCalculationComponent', () => {
  let component: CustomerAcquisitionBonusCalculationComponent;
  let fixture: ComponentFixture<CustomerAcquisitionBonusCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAcquisitionBonusCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAcquisitionBonusCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
