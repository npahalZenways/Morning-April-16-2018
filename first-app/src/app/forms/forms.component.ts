import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  submitClicked: boolean = false;

  @ViewChild('studyForm') form;

  constructor() { }

  submit(){
    console.log('form submitted')
    console.log(this.form)
  }

  ngOnInit() {
  }

}
