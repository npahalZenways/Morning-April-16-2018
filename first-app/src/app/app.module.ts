import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { Custom } from './custom-component/custom';
import { FormsModule } from "@angular/forms";
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { Comp1Component } from './component-details/comp1/comp1.component';
import { Comp2Component } from './component-details/comp2/comp2.component';

@NgModule({
  bootstrap: [AppComponent],  
  declarations: [
    // components, directives, pipes
    AppComponent,
    Custom,
    InBuiltDirectivesComponent,
    Comp1Component,
    Comp2Component,
  ],
  imports:[
    // modules
    BrowserModule,
    FormsModule
  ],
  providers: [
    // services
  ]
})
export class App{

}
