import { NgModule } from "@angular/core";
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        HeaderComponent
    ],
    imports:[NgZorroAntdModule,CommonModule,RouterModule],
    exports:[HeaderComponent]
})

export class  HeaderModule {
    constructor(){}
}