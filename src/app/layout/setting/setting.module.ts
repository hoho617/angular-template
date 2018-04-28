import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { SettingComponent } from './setting.component';
import { SettingRoutingModule} from "./setting-routing.module";


@NgModule({
  declarations: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ],
  providers: []
})
export class SettingModule { }
