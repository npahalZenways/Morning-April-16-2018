import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MyFirstService } from '../../shared-module/service/myfirst.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, AfterViewInit {

  prop = 'hello';
  name() {
    return this.prop;
  }

  printOutput(e){
    console.log(e)
  }

  // Dependcy injection
  constructor(
    private myservice: MyFirstService
  ) { 
    console.log('constructor called')
  }

  ngOnInit() {
    setInterval(()=>{
      console.log('from Comp 1 ', this.myservice.text)
    }, 2000)
  }

  ngAfterViewInit(){

  }

}
