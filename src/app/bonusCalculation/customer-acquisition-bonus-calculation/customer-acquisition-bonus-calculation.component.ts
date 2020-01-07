import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PercentageConnService } from 'src/app/service/percentage-conn.service';

@Component({
  selector: 'app-customer-acquisition-bonus-calculation',
  templateUrl: './customer-acquisition-bonus-calculation.component.html',
  styleUrls: ['./customer-acquisition-bonus-calculation.component.css']
})
export class CustomerAcquisitionBonusCalculationComponent implements OnInit {
  levelForm: FormGroup;

  constructor(private service : PercentageConnService) { }

  ngOnInit() {
    this.levelForm = new FormGroup({
      level1 : new FormControl(''),
      level2 : new FormControl(''),
      level3 : new FormControl(''),
      level4 : new FormControl(''),
      level5 : new FormControl('')
    });
  }

    bonusCalculation()
    {
      console.log(this.levelForm.value);
      // this.service.calculateBonus(this.levelForm.value.level1,this.levelForm.value.level2,
      //   this.levelForm.value.level3,this.levelForm.value.level4,this.levelForm.value.level5).subscribe(x =>{
      //   console.log(x);
      // })
  
      this.service.customerAcquisitionBonusCalculation(this.levelForm.value).subscribe(x => {
        console.log(x)
      })
    }
}
