import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { percentageSet } from '../modal/percentageModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PercentageConnService {

  private baseUrl = 'http://localhost:8080/nextSphere';
  
  constructor(private http: HttpClient) { }

  setPercentage(percentages: percentageSet) {
    return this.http.post(`${this.baseUrl}/percentage`, percentages);
  }

  customerAcquisitionBonusCalculation(levels : object) : Observable<any> {
    return this.http.post(`${this.baseUrl}/levels`,levels);
  }
}
