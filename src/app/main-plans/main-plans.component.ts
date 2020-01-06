import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-plans',
  templateUrl: './main-plans.component.html',
  styleUrls: ['./main-plans.component.css']
})
export class MainPlansComponent implements OnInit {

  @Input()
value: any
  mainPlanForm: FormGroup;

  constructor(private service : LoginService, private router: Router) { }
  

  ngOnInit() {
    this.mainPlanForm = new FormGroup({
      mainPlanKey: new FormControl('')
    })
  }

 

  mainPlan()
  {
    console.log(this.mainPlanForm.value);
    this.service.executeMainPlan(this.mainPlanForm.value.mainPlanKey).subscribe(x => {
      console.log(x);
      sessionStorage.setItem("compensationPlans",JSON.stringify(x));
    })
    
    this.router.navigate(['compensationPlans']);
  }






}
