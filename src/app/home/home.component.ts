import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle =  "Welcome to the angular-project";
  myString = "I like chicken";
  myBoolean = false;

  mydata = {
    name : "Ashif",
    belt : "Black"
  }
  alertMe(val){
    alert(val);
  }

  @Input() root;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
