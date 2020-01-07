import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusCalculationRoutingModule } from './bonus-calculation-routing.module';
import { FastStartBonusCalculationComponent } from './fast-start-bonus-calculation/fast-start-bonus-calculation.component';
import { CustomerAcquisitionBonusCalculationComponent } from './customer-acquisition-bonus-calculation/customer-acquisition-bonus-calculation.component';
import { CustomerMilestoneBonusCalculationComponent } from './customer-milestone-bonus-calculation/customer-milestone-bonus-calculation.component';
import { EarnedPositionBonusCalculationComponent } from './earned-position-bonus-calculation/earned-position-bonus-calculation.component';
import { PersonalSponsoredCustomerPremiumKitBonusCalculationComponent } from './personal-sponsored-customer-premium-kit-bonus-calculation/personal-sponsored-customer-premium-kit-bonus-calculation.component';
import { PreferredCustomerSalesBonusCalculationComponent } from './preferred-customer-sales-bonus-calculation/preferred-customer-sales-bonus-calculation.component';
import { RetailBonusCalculationComponent } from './retail-bonus-calculation/retail-bonus-calculation.component';
import { VolumeBonusCalculationComponent } from './volume-bonus-calculation/volume-bonus-calculation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FastStartBonusCalculationComponent,
    CustomerAcquisitionBonusCalculationComponent,
    CustomerMilestoneBonusCalculationComponent,
    EarnedPositionBonusCalculationComponent,
    PersonalSponsoredCustomerPremiumKitBonusCalculationComponent,
    PreferredCustomerSalesBonusCalculationComponent,
    RetailBonusCalculationComponent,
    VolumeBonusCalculationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BonusCalculationRoutingModule
  ]
})
export class BonusCalculationModule { }
