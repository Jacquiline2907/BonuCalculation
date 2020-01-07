import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { percentageSet } from 'src/app/modal/percentageModel';
import { PercentageConnService } from 'src/app/service/percentage-conn.service';

@Component({
  selector: 'app-personal-sponsored-customer-premium-kit-bonus-calculation',
  templateUrl: './personal-sponsored-customer-premium-kit-bonus-calculation.component.html',
  styleUrls: ['./personal-sponsored-customer-premium-kit-bonus-calculation.component.css']
})
export class PersonalSponsoredCustomerPremiumKitBonusCalculationComponent implements OnInit {

  percentageLevels: FormGroup;
  percentageModel: percentageSet;
  constructor(private setPercent: PercentageConnService) { }
  ngOnInit() {
    this.percentageLevels = new FormGroup({
      l1: new FormControl(),
      l2: new FormControl(),
      l3: new FormControl(),
      l4: new FormControl(),
      l5: new FormControl()
    });

  }
  onSubmit() {
    // console.log(this.percentageLevels.value);
    this.percentageModel = this.percentageLevels.value;
    console.log(this.percentageModel);

    this.setPercent.premiumKitSetPercentage(this.percentageModel).subscribe(response => {
      console.log(response);
    });


  }
}
