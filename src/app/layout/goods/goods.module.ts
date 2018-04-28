import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { GoodsComponent } from './goods.component';
import {GoodsRoutingModule} from "./goods-routing.module";


@NgModule({
  declarations: [
    GoodsComponent
  ],
  imports: [
    CommonModule,
    GoodsRoutingModule
  ],
  providers: []
})
export class GoodsModule { }
