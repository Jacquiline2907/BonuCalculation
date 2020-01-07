import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { percentageSet } from '../modal/percentageModel';


@Injectable({
  providedIn: 'root'
})
export class PercentageConnService {

  constructor(private http: HttpClient) { }

  setPercentage(percentages: percentageSet) {
    return this.http.post('http://localhost:8080/nextSphere/percentage', percentages);
  }
}
