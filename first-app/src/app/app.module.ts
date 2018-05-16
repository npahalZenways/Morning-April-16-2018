import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { Custom } from './custom-component/custom';
import { FormsModule } from "@angular/forms";
import { InBuiltDirectivesComponent } from './in-built-directives/in-built-directives.component';
import { Comp1Component } from './component-details/comp1/comp1.component';
import { Comp2Component } from './component-details/comp2/comp2.component';
import { SharedModule } from './shared-module/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error-404/error-404.component';

const routes: Route[] = []

@NgModule({
  bootstrap: [AppComponent],  
  declarations: [
    // components, directives, pipes
    AppComponent,
    Custom,
    InBuiltDirectivesComponent,
    Comp1Component,
    Comp2Component,
    LoginComponent,
    Error404Component,
  ],
  imports:[
    // modules
    BrowserModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },{
      path:'login',
      component: LoginComponent,
      children: [{
        path: 'child',
        component: InBuiltDirectivesComponent
      }],
      data:{
        heading: 'login component'
      }
    },{
      path: 'in-built-directives',
      component: InBuiltDirectivesComponent
    },{
      path: 'admin',
      loadChildren: './admin/admin.module#AdminModule'
    },{
      path:'forms',
      loadChildren: './forms/forms.module#MyFormsModule'
    },{
      path: '**',
      component: Error404Component
    }])
  ],
  providers: [
    // services
  ]
})
export class App{

}
