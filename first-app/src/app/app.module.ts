import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { mycomponent } from './mycomp/mycomponent'

@NgModule({
  bootstrap: [AppComponent],  
  declarations: [
    // components, directives, pipes
    AppComponent,
    mycomponent
  ],
  imports:[
    // modules
    BrowserModule
  ],
  providers: [
    // services
  ]
})
export class App{

}
