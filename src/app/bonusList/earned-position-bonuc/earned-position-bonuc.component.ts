import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earned-position-bonuc',
  templateUrl: './earned-position-bonuc.component.html',
  styleUrls: ['./earned-position-bonuc.component.css']
})
export class EarnedPositionBonucComponent implements OnInit {

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
