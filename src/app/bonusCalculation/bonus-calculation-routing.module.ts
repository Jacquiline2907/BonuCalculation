import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FastStartBonusCalculationComponent } from './fast-start-bonus-calculation/fast-start-bonus-calculation.component';
import { PersonalSponsoredCustomerPremiumKitBonusCalculationComponent } from './personal-sponsored-customer-premium-kit-bonus-calculation/personal-sponsored-customer-premium-kit-bonus-calculation.component';
import { PreferredCustomerSalesBonusCalculationComponent } from './preferred-customer-sales-bonus-calculation/preferred-customer-sales-bonus-calculation.component';
import { VolumeBonusCalculationComponent } from './volume-bonus-calculation/volume-bonus-calculation.component';
import { CustomerAcquisitionBonusCalculationComponent } from './customer-acquisition-bonus-calculation/customer-acquisition-bonus-calculation.component';
import { CustomerMilestoneBonusCalculationComponent } from './customer-milestone-bonus-calculation/customer-milestone-bonus-calculation.component';
import { EarnedPositionBonusCalculationComponent } from './earned-position-bonus-calculation/earned-position-bonus-calculation.component';
import { RetailBonusCalculationComponent } from './retail-bonus-calculation/retail-bonus-calculation.component';



const routes: Routes = [
  {path:'fastStartBonusCalculation',component:FastStartBonusCalculationComponent},
  {path:'personalSponsoredCustomerPremiumKitBonusCalculation',component:PersonalSponsoredCustomerPremiumKitBonusCalculationComponent},
  {path:'preferredCustomerSalesBonusCalculation',component:PreferredCustomerSalesBonusCalculationComponent},
  {path:'volumeBonusCalculation',component:VolumeBonusCalculationComponent},
  {path:'customerAcquisitionBonusCalculation',component:CustomerAcquisitionBonusCalculationComponent},
  {path:'customerMilestoneBonusCalculation',component:CustomerMilestoneBonusCalculationComponent},
  {path:'earnedPositionBonusCalculation',component:EarnedPositionBonusCalculationComponent},
  {path:'retailBonusCalculation',component:RetailBonusCalculationComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BonusCalculationRoutingModule { }
