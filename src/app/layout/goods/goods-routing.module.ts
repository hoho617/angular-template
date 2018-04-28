import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { GoodsComponent } from './goods.component';
import { GoodsModule } from './goods.module';

// goods-routing.module.ts
const routes:Routes = [
  {
    path:'',
    component:GoodsComponent,
    children:[
      {path:'',redirectTo:'/goods/goods-type',pathMatch:'full'},
      {
        path:'goods-type',loadChildren:'./goods-type/goods-type.module#GoodsTypeModule'
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
