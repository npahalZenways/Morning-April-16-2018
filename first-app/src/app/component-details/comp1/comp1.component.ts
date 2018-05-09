import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  prop = 'hello';
  name() {
    return this.prop;
  }

  printOutput(e){
    console.log(e)
  }

  constructor() { 
    console.log('constructor called')
  }

  ngOnInit() {
  }

}
