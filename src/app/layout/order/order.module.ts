import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { OrderComponent } from './order.component';
import {OrderRoutingModule} from "./order-routing.module";
import { OrderQueryComponent } from './order-query/order-query.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderQueryComponent
  ],
  imports: [
    CommonModule,
      OrderRoutingModule
  ],
  providers: []
})
export class OrderModule { }
