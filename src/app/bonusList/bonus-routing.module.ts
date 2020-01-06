import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FastStartBonusComponent } from './fast-start-bonus/fast-start-bonus.component';
import { PersonalSponsoredCustomerpremiumkitBonusComponent } from './personal-sponsored-customerpremiumkit-bonus/personal-sponsored-customerpremiumkit-bonus.component';
import { PreferredCustomerSalesBonusComponent } from './preferred-customer-sales-bonus/preferred-customer-sales-bonus.component';
import { VolumeBonusComponent } from './volume-bonus/volume-bonus.component';
import { CustomerAcquisitionBonusComponent } from './customer-acquisition-bonus/customer-acquisition-bonus.component';
import { EarnedPositionBonucComponent } from './earned-position-bonuc/earned-position-bonuc.component';
import { RetailBonusComponent } from './retail-bonus/retail-bonus.component';
import { CustomerMilestoneBonusComponent } from './customer-milestone-bonus/customer-milestone-bonus.component';

const routes: Routes = [
  { path: 'fastStartBonus', component: FastStartBonusComponent },
  { path: 'personalSponsoredCustomerPremiumKitBonus', component: PersonalSponsoredCustomerpremiumkitBonusComponent },
  { path: 'preferredCustomerSalesBonus', component: PreferredCustomerSalesBonusComponent },
  { path: 'volumeBonus', component: VolumeBonusComponent },
  { path: 'customerAcquisitionBonus', component: CustomerAcquisitionBonusComponent },
  { path: 'earnedPositionBonus', component: EarnedPositionBonucComponent },
  { path: 'retailBonus', component: RetailBonusComponent },
  { path: 'customerMilestoneBonus', component: CustomerMilestoneBonusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class BonusRoutingModule { }
