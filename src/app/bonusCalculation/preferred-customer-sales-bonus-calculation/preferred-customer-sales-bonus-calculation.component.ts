import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { samplepojo } from "src/app/modal/samplepojo";
import { PercentageConnService } from 'src/app/service/percentage-conn.service';

@Component({
  selector: 'app-preferred-customer-sales-bonus-calculation',
  templateUrl: './preferred-customer-sales-bonus-calculation.component.html',
  styleUrls: ['./preferred-customer-sales-bonus-calculation.component.css']
})
export class PreferredCustomerSalesBonusCalculationComponent implements OnInit {
  constructor(private service: PercentageConnService, private router: Router) {}

  title = "sampleUIbonus";
  formdata: FormGroup;
  samplepojo: samplepojo[];
  ngOnInit() {
    this.formdata = new FormGroup({
      lev1: new FormControl("", Validators.required),
      lev2: new FormControl("", Validators.required),
      lev3: new FormControl(""),
      lev4: new FormControl(""),
      lev5: new FormControl("")
    });
  }
  callingFunction() {
    // this.formdata = data;
    console.log(this.formdata.value);
    this.service.prefCustSaleBonus(this.formdata.value).subscribe((data: samplepojo) => {
      console.log('after service hitted====>');
      console.log(data);
    });
  }
}
