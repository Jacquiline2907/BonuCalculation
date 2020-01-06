import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retail-bonus',
  templateUrl: './retail-bonus.component.html',
  styleUrls: ['./retail-bonus.component.css']
})
export class RetailBonusComponent implements OnInit {

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
