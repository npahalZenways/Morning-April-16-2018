import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-initial',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Game selector';
  headers;
  params;

  constructor(
    private http: HttpClient,
    private router: Router
  ){
    this.params = new HttpParams();
    this.params.set('access_key', '09b72fe31175c35725b9176e60b350aa');
  }

  navigateToDirectives(){
    this.router.navigate(['/in-built-directives'])
  }

  ngOnInit(){
    this.http.get('https://data.fixer.io/api/latest?access_key=09b72fe31175c35725b9176e60b350aa', {
      params: this.params
    }).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
