import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! fine.';
  name = 'Ashif';

  rootdata = {
    name : "Ashif",
    belt : "Black"
  }
  yell(e){
    alert("I am Yelling");
    console.log(e);
  }
}
