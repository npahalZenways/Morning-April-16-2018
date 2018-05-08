import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { Custom } from './custom-component/custom';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';

@NgModule({
  bootstrap: [AppComponent],  
  declarations: [
    // components, directives, pipes
    AppComponent,
    Custom,
    HeaderComponent,
    InBuiltDirectivesComponent
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
