import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bonuses',
  templateUrl: './bonuses.component.html',
  styleUrls: ['./bonuses.component.css']
})
export class BonusesComponent implements OnInit {
  commissionType: string;
  commissionTypeArr: Array<any> = []
  length: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.commissionType = sessionStorage.getItem('commissionType');
    console.log(this.commissionType);
    this.commissionTypeArr = this.commissionType.split(",");
    this.length = this.commissionTypeArr.length;
    console.log(this.commissionTypeArr);
    console.log(this.commissionTypeArr.length);

  }

  fastStartBonus() {
    console.log("works");
    this.router.navigate(['fastStartBonus']);
  }

  personalSponsoredCustomerPremiumKitBonus() {
    console.log("works");
    this.router.navigate(['personalSponsoredCustomerPremiumKitBonus']);
  }

  preferredCustomerSalesBonus() {
    console.log("works");
    this.router.navigate(['preferredCustomerSalesBonus']);
  }

  volumeBonus() {
    console.log("works");
    this.router.navigate(['volumeBonus']);
  }


  customerAcquisitionBonus() {
    console.log("works");
    this.router.navigate(['customerAcquisitionBonus']);
  }

  earnedPositionBonus() {
    console.log("works");
    this.router.navigate(['earnedPositionBonus']);
  }

  retailBonus() {
    console.log("works");
    this.router.navigate(['retailBonus']);
  }

  customerMilestoneBonus(){
    console.log("works");
    this.router.navigate(['customerMilestoneBonus']);
  }

  back(){
    this.router.navigate(['commissionType']);
  }

  fastStartBonusCalculation()
  {
    console.log("calculation works");
    this.router.navigate(['/fastStartBonusCalculation']);
  }

  personalSponsoredCustomerPremiumKitBonusCalculation()
  {
    console.log("calculation works");
    this.router.navigate(['/personalSponsoredCustomerPremiumKitBonusCalculation']);
  }
  preferredCustomerSalesBonusCalculation()
  {
    console.log("calculation works");
    this.router.navigate(['/preferredCustomerSalesBonusCalculation']);
  }
  volumeBonusCalculation()
  {
    console.log("calculation works");
    this.router.navigate(['/volumeBonusCalculation']);
  }
  customerAcquisitionBonusCalculation()
  {
    console.log("calculation works");
    this.router.navigate(['/customerAcquisitionBonusCalculation']);
  }
  customerMilestoneBonusCalculation()
  {
    console.log("calculation works");
    this.router.navigate(['/customerMilestoneBonusCalculation']);
  }
  earnedPositionBonusCalculation()
  {
    console.log("calculation works");
    this.router.navigate(['/earnedPositionBonusCalculation']);
  }
  retailBonusCalculation()
  {
    console.log("calculation works");
    this.router.navigate(['/retailBonusCalculation']);
  }
  
  distributorStructure()
  {
    this.router.navigate(['distributor']);
  }

}
