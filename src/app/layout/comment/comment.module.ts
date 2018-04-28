import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CommentComponent } from './comment.component';
import {CommentRoutingModule} from "./comment-routing.module";


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ],
  providers: []
})
export class CommentModule { }
