import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { ClientComponent} from './client.component';
import { ClientRoutingModule } from "./client-routing.module";


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  providers: []
})
export class ClientModule { }
