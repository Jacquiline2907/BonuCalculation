import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compensation-plans',
  templateUrl: './compensation-plans.component.html',
  styleUrls: ['./compensation-plans.component.css']
})
export class CompensationPlansComponent implements OnInit {


  compenstionPlanForm: FormGroup;
  compensationPlans = [
    { planKey: 1, plans: 'Stairstep' },
    { planKey: 1, plans: 'Unilevel' },
    { planKey: 1, plans: 'Unigen' },
    { planKey: 1, plans: 'Hybrid Unilevel' },
    { planKey: 1, plans: 'Matrix' },
    { planKey: 1, plans: 'Binary' }
  ]

  ngOnInit() {
    // console.log((sessionStorage.getItem("compensationPlans")));
    // this.compensationPlans = JSON.parse(sessionStorage.getItem("compensationPlans"));
  }

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.compenstionPlanForm = this.formBuilder.group({
      compensation: new FormArray([])
    });
    this.addCheckBox();
  }

  private addCheckBox() {
    this.compensationPlans.forEach((o, i) => {
      const control = new FormControl(i == 0);
      (this.compenstionPlanForm.controls.compensation as FormArray).push(control);
    })
  }


  submit() {
    const selectedOrders = this.compenstionPlanForm.value.compensation
      .map((v, i) => v ? this.compensationPlans[i].plans : null)
      .filter(v => v !== null);
    console.log(selectedOrders);
    this.router.navigate(['commissionType'])
  }





  // compenstionPlanForm = new FormGroup({
  //   compensationPlansNames : new FormControl('')
  // })


  // compensationPlan() {
  //   console.log(this.compenstionPlanForm.value.compensationPlansNames);
  //   this.router.navigate(['commissionType']);


  // }


}
