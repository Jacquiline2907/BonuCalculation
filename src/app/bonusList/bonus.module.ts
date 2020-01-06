import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusRoutingModule } from './bonus-routing.module';
import { FastStartBonusComponent } from './fast-start-bonus/fast-start-bonus.component';
import { CustomerAcquisitionBonusComponent } from './customer-acquisition-bonus/customer-acquisition-bonus.component';
import { CustomerMilestoneBonusComponent } from './customer-milestone-bonus/customer-milestone-bonus.component';
import { EarnedPositionBonucComponent } from './earned-position-bonuc/earned-position-bonuc.component';
import { PersonalSponsoredCustomerpremiumkitBonusComponent } from './personal-sponsored-customerpremiumkit-bonus/personal-sponsored-customerpremiumkit-bonus.component';
import { PreferredCustomerSalesBonusComponent } from './preferred-customer-sales-bonus/preferred-customer-sales-bonus.component';
import { RetailBonusComponent } from './retail-bonus/retail-bonus.component';
import { VolumeBonusComponent } from './volume-bonus/volume-bonus.component';



@NgModule({
  declarations: [
    FastStartBonusComponent,
    CustomerAcquisitionBonusComponent,
    CustomerMilestoneBonusComponent,
    EarnedPositionBonucComponent,
    PersonalSponsoredCustomerpremiumkitBonusComponent,
    PreferredCustomerSalesBonusComponent,
    RetailBonusComponent,
    VolumeBonusComponent
  ],
  imports: [
    CommonModule,
    BonusRoutingModule
  ]
})
export class BonusModule { }
