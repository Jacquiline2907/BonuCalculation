import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSponsoredCustomerPremiumKitBonusCalculationComponent } from './personal-sponsored-customer-premium-kit-bonus-calculation.component';

describe('PersonalSponsoredCustomerPremiumKitBonusCalculationComponent', () => {
  let component: PersonalSponsoredCustomerPremiumKitBonusCalculationComponent;
  let fixture: ComponentFixture<PersonalSponsoredCustomerPremiumKitBonusCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSponsoredCustomerPremiumKitBonusCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSponsoredCustomerPremiumKitBonusCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
