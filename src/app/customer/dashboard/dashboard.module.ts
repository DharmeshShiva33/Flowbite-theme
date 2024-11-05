import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    NavigationComponent,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
