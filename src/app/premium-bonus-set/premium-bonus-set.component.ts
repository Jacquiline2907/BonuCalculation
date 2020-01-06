import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { PercentageConnService } from '../service/percentage-conn.service';
import { percentageSet } from '../modal/percentageModel';

@Component({
  selector: 'app-premium-bonus-set',
  templateUrl: './premium-bonus-set.component.html',
  styleUrls: ['./premium-bonus-set.component.css']
})
export class PremiumBonusSetComponent implements OnInit {

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

    this.setPercent.setPercentage(this.percentageModel).subscribe(response => {
      console.log(response);
    });


  }


}
