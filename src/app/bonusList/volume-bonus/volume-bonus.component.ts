import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volume-bonus',
  templateUrl: './volume-bonus.component.html',
  styleUrls: ['./volume-bonus.component.css']
})
export class VolumeBonusComponent implements OnInit {

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
