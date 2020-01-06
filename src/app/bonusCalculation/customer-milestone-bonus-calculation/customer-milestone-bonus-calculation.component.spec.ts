import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMilestoneBonusCalculationComponent } from './customer-milestone-bonus-calculation.component';

describe('CustomerMilestoneBonusCalculationComponent', () => {
  let component: CustomerMilestoneBonusCalculationComponent;
  let fixture: ComponentFixture<CustomerMilestoneBonusCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMilestoneBonusCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMilestoneBonusCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
