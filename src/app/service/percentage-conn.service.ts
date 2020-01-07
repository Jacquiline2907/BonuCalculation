import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { percentageSet } from "../modal/percentageModel";
import { Observable } from "rxjs";
import { samplepojo } from "../modal/samplepojo";

@Injectable({
  providedIn: "root"
})
export class PercentageConnService {
  private baseUrl = "http://localhost:8080/nextSphere";

  constructor(private http: HttpClient) {}

  // vishnu service
  premiumKitSetPercentage(percentages: percentageSet) {
    return this.http.post(`${this.baseUrl}/percentage`, percentages);
  }

  //Jack service
  customerAcquisitionBonusCalculation(levels: object): Observable<any> {
    return this.http.post(`${this.baseUrl}/levels`, levels);
  }

  // Sreeja Service
  prefCustSaleBonus(data: samplepojo): Observable<any> {
    console.log("it is hiiting service");
    console.log(data);
    //
    return this.http.post<samplepojo>(this.baseUrl + '/novusbonus', data);
  }
}
