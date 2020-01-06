import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fast-start-bonus',
  templateUrl: './fast-start-bonus.component.html',
  styleUrls: ['./fast-start-bonus.component.css']
})
export class FastStartBonusComponent implements OnInit {

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
