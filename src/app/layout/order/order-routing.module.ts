import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderQueryComponent } from './order-query/order-query.component';


const routes:Routes = [
  {
    path:'',
    component:OrderComponent,
    children:[
      {path:'',redirectTo:'/order/query',pathMatch:'full'},
      {path:'query',component:OrderQueryComponent},
      {path:'delete',component:OrderQueryComponent},
      {path:'modify',component:OrderQueryComponent}
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
