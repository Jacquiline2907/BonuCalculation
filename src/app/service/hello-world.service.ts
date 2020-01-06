import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageModel } from '../modal/Message';

@Injectable({
    providedIn: 'root'
})
export class HelloWorldService {
    constructor(private http: HttpClient) {
    }
    executeHelloWorldService() {
     // console.log("inside angular");
     //   return this.http.get<MessageModel>('http://localhost:8080/nextSphere/home');
    }
}
