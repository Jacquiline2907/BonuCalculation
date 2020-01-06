import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-acquisition-bonus',
  templateUrl: './customer-acquisition-bonus.component.html',
  styleUrls: ['./customer-acquisition-bonus.component.css']
})
export class CustomerAcquisitionBonusComponent implements OnInit {

  constructor(private router : Router) { }

 
  back()
  {
    this.router.navigate(['bonus']);
  }
  commissionType()
  {
    this.router.navigate(['commissionType']);
  }

  ngOnInit() {
  }

}
