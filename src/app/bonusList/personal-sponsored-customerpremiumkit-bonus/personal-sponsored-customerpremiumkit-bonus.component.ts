import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-sponsored-customerpremiumkit-bonus',
  templateUrl: './personal-sponsored-customerpremiumkit-bonus.component.html',
  styleUrls: ['./personal-sponsored-customerpremiumkit-bonus.component.css']
})
export class PersonalSponsoredCustomerpremiumkitBonusComponent implements OnInit {

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
