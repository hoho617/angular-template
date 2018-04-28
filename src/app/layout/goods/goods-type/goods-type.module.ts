import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { GoodsTypeComponent} from './goods-type.component';
import { GoodsTypeRoutingModule } from "./goods-type-routing.module";
import { GoodsTypeTwoComponent } from './goods-type-two/goods-type-two.component';


@NgModule({
  declarations: [
    GoodsTypeComponent,
    GoodsTypeTwoComponent
  ],
  imports: [
    CommonModule,
    GoodsTypeRoutingModule
  ],
  providers: []
})
export class GoodsTypeModule { }
