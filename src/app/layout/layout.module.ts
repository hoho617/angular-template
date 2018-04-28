import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";
// 引入ng-zorro
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../shared/component/header/header.module';
import { SiderModule } from '../shared/component/sider/sider.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule.forRoot(),
      LayoutRoutingModule,
      HeaderModule,
      SiderModule
  ]
})
export class LayoutModule { }
