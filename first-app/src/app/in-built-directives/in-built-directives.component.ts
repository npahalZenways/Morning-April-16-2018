import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-built-directives',
  templateUrl: './in-built-directives.component.html',
  styleUrls: ['./in-built-directives.component.css']
})
export class InBuiltDirectivesComponent implements OnInit {

  myArray = [1,2,3,4];

  // mycondition = true;

  author;
  red = true;

  constructor() { }

  ngOnInit() {
  }

}
