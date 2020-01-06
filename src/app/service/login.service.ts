import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { MessageModel } from '../modal/Message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/nextSphere';

  constructor(private http: HttpClient) {
  }
  executeLoginService() {

    return this.http.get<MessageModel>('http://localhost:8080/nextSphere/home');
  }

  isValidUser(userName: String)
  {
    return this.http.get<Boolean>(`${this.url}/isValidUser?user=`+ userName);
  }

  isValidPassword(password: String)
  {
    return this.http.get<Boolean>('http://localhost:8080/nextSphere/isValidPassword?password=' + password);
  }

  executeMainPlan(mainPlanKey : string) : Observable<object>
  {
     let params = new HttpParams().set("mainPlanKey",mainPlanKey)
    return this.http.get(`${this.url}/mainPlans`,{params});
  }

  // postQuestions(userId: string, question: object): Observable<object> {
  //   // let params = new HttpParams().set("userId", userId)
  //   return this.httpclient.post(`${this.baseUrl}/${userId}/questions`,question);
  // }
}
