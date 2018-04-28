import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {

  // 将url广播出去
  @Output() 
  public urlInfo = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  sendUrl(e){
    this.urlInfo.emit(e);
  }
}
