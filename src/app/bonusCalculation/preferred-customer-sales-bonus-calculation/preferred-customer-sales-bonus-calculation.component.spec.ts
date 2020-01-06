import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredCustomerSalesBonusCalculationComponent } from './preferred-customer-sales-bonus-calculation.component';

describe('PreferredCustomerSalesBonusCalculationComponent', () => {
  let component: PreferredCustomerSalesBonusCalculationComponent;
  let fixture: ComponentFixture<PreferredCustomerSalesBonusCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferredCustomerSalesBonusCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferredCustomerSalesBonusCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
