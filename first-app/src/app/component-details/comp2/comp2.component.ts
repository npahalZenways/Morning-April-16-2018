import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MyFirstService } from '../../shared-module/service/myfirst.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  // inputs: ['myname:name', 'gender'],
  // outputs: ['myoutput']
})
export class Comp2Component implements OnInit {

  prop = 'hello';
  @Input('name') myname;
  @Input() gender;

  @Output() myoutput = new EventEmitter();

  constructor( private myserv: MyFirstService ) { }

  ngOnInit() {
    setInterval(()=>{
      console.log('from comp 2 ', this.myserv.text)
    }, 2000)
  }

}
