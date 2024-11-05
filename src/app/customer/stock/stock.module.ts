import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from '../navigation/navigation.component';
import { StockComponent } from './stock.component';
import { StockRoutingModule } from './stock-routing.module';

@NgModule({
  declarations: [ StockComponent ],
  imports: [
    CommonModule,
    NavigationComponent,
    StockRoutingModule
  ]
})
export class StockModule { }
