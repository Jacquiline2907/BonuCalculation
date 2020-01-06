import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-milestone-bonus',
  templateUrl: './customer-milestone-bonus.component.html',
  styleUrls: ['./customer-milestone-bonus.component.css']
})
export class CustomerMilestoneBonusComponent implements OnInit {

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
