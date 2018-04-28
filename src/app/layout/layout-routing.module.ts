import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

// layout-routing.module.ts
const routes:Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/order',
        pathMatch:'full'
      },{
        path:'order',
        loadChildren:'./order/order.module#OrderModule'
      },{
        path:'goods',
        loadChildren:'./goods/goods.module#GoodsModule'
      },{
        path:'client',
        loadChildren:'./client/client.module#ClientModule'
      },{
        path:'comment',
        loadChildren:'./comment/comment.module#CommentModule'
      },{
        path:'setting',
        loadChildren:'./setting/setting.module#SettingModule'
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
export class LayoutRoutingModule { }
