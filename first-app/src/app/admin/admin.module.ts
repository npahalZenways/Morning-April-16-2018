import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'home',
      component: AdminComponent
    }])
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
