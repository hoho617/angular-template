import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.css']
})
export class SiderComponent implements OnInit {

  @Input()
  public siderMenu;
  public showSubmenu;
  constructor() { }

  ngOnInit() {
  }

  submenu(element){
    this.showSubmenu = element;
  }
}
