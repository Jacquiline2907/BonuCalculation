
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelloWorldService } from '../service/hello-world.service';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent  {

  // welcomeMessage = '';

  // constructor(private route: ActivatedRoute,
  //   private router: Router, private helloWorldService: HelloWorldService) { }

  // ngOnInit() {
  //   console.log("within component.ts");
  //   this.helloWorldService.executeHelloWorldService().subscribe((res) => {
  //     console.log(res);
  //     this.welcomeMessage = res.message;
  //    // console.log(res.)
  //   });
  // }
}
