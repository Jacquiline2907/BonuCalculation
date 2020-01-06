import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MainPlansComponent } from './main-plans/main-plans.component';
import { LoginComponent } from './login/login.component';
import { CompensationPlansComponent } from './compensation-plans/compensation-plans.component';
import { CommissionTypeComponent } from './commission-type/commission-type.component';
import { BonusesComponent } from './bonuses/bonuses.component';
import { DistributorStructureComponent } from './distributor-structure/distributor-structure.component';

const routes: Routes = [
  // { path: '', component: HelloWorldComponent },
  { path: '', component: LoginComponent },
  { path: 'mainPlans', component: MainPlansComponent },
  { path: 'compensationPlans', component: CompensationPlansComponent },
  { path: 'commissionType', component: CommissionTypeComponent },
  { path: 'bonus', component: BonusesComponent },
  { path: 'distributor', component: DistributorStructureComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
