import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
