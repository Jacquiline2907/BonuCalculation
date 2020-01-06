import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MenuComponent } from './menu/menu.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule, MatInputModule, MatRadioModule, MatDividerModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenubarComponent } from './menubar/menubar.component';
import { MainPlansComponent } from './main-plans/main-plans.component';
import { CompensationPlansComponent } from './compensation-plans/compensation-plans.component';
import { CommissionTypeComponent } from './commission-type/commission-type.component';
import { BonusModule } from './bonusList/bonus.module';
import { BonusesComponent } from './bonuses/bonuses.component';
import { DistributorStructureComponent } from './distributor-structure/distributor-structure.component';
import { BonusCalculationModule } from './bonusCalculation/bonus-calculation.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MenuComponent,
    LoginComponent,
    MenubarComponent,
    MainPlansComponent,
    CompensationPlansComponent,
    CommissionTypeComponent,
    BonusesComponent,
    DistributorStructureComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatDividerModule,
    BonusModule,
    BonusCalculationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
