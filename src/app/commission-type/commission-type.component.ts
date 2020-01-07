import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commission-type',
  templateUrl: './commission-type.component.html',
  styleUrls: ['./commission-type.component.css']
})
export class CommissionTypeComponent implements OnInit {

  commissionTypeForm: FormGroup;
  commissionTypeData = [
    { name: 'Differential' },
    { name: 'Level' }
  ]

  constructor(private router : Router, private formBuilder: FormBuilder) {
    this.commissionTypeForm = this.formBuilder.group({
      commission : new FormArray([])
    });
    this.addCheckBox();
   }

  ngOnInit() { }

  private addCheckBox()
  {
    this.commissionTypeData.forEach((o,i) => {
      const control = new FormControl(o);    
      (this.commissionTypeForm.controls.commission as FormArray).push(control);
    })
  }

  submit()
  {
    const selectedOrders = this.commissionTypeForm.value.commission
    .map((v,i) => v ? this.commissionTypeData[i].name : null)
    .filter(v => v !==  null);
    sessionStorage.setItem('commissionType',selectedOrders);
    console.log(selectedOrders);
    this.router.navigate(['bonus']);
  }
 





}
