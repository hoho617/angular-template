import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { GoodsTypeComponent } from './goods-type.component';
import { GoodsTypeTwoComponent } from './goods-type-two/goods-type-two.component';


// goods-type-routing.module.ts
const routes:Routes = [
  {
    path:'',
    component:GoodsTypeComponent
  },{
    path:'type-two',
    component:GoodsTypeTwoComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GoodsTypeRoutingModule { }
