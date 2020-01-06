import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-distributor-structure',
  templateUrl: './distributor-structure.component.html',
  styleUrls: ['./distributor-structure.component.css']
})
export class DistributorStructureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  distributorForm = new FormGroup({
    maxFirstLevelDistributors: new FormControl(''),
    minFirstLevelDistributors: new FormControl(''),
    maxLevels: new FormControl('')

  })

}
