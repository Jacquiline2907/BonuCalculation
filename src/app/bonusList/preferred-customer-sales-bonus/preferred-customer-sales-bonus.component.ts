import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferred-customer-sales-bonus',
  templateUrl: './preferred-customer-sales-bonus.component.html',
  styleUrls: ['./preferred-customer-sales-bonus.component.css']
})
export class PreferredCustomerSalesBonusComponent implements OnInit {

  constructor(private router : Router) { }

 
  back()
  {
    this.router.navigate(['bonus']);
  }


  ngOnInit() {
  }
  commissionType()
  {
    this.router.navigate(['commissionType']);
  }

}
