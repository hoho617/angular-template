import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public offsetwidth  = document.body.clientWidth - 200-20;
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
    this.changeRoutes(this.router.url);
  }

  public siderMenu:Array<any>;
  public url;
  changeRoutes(url){
    if(url.startsWith('/order')){
      let tempMenu = new Array<any>();
      tempMenu.push({name:'订单管理',href:'/order',type:'parent',isSelected:url=='/order',children:[
        {name:'订单查询',href:'/order/query',isSelected:url==='/order/query',type:'outside'},
        {name:'订单删除',href:'/order/delete',isSelected:url==='/order/delete',type:'outside'},
        {name:'订单修改',href:'/order/modify',isSelected:url==='/order/modify',type:'outside'}
      ]});
      tempMenu.push({name:'点评管理',href:'/comment',type:'outside',isSelected:url=='/comment'});
      this.siderMenu = tempMenu;
    }else if(url.startsWith('/goods')){
      let tempMenu = new Array<any>();
      tempMenu.push({name:'商品管理',href:'/goods',type:'outside',isSelected:url=='/goods'});
      tempMenu.push({name:'商品类别',type:'parent',children:[
        {name:'类别1',href:'/goods/goods-type',isSelected:url==='/goods/goods-type',type:'outside'},
        {name:'类别2',href:'/goods/goods-type/type-two',isSelected:url==='/goods/goods-type/type-two',type:'outside'}
      ]});
      this.siderMenu = tempMenu;
    }else if(url.startsWith('/client')){
      let tempMenu = new Array<any>();
      tempMenu.push({name:'客户管理',href:'/client',type:'outside',isSelected:url=='/client'});
      tempMenu.push({name:'标签管理',href:'/client/tag',type:'outside',isSelected:url=='/client/tag'});
      this.siderMenu = tempMenu;
    }else if(url.startsWith('/comment')){
      let tempMenu = new Array<any>();
      tempMenu.push({name:'点评管理',href:'/comment',type:'outside',isSelected:url=='/comment'});
      this.siderMenu = tempMenu;
    }else if(url.startsWith('/setting')){
      let tempMenu = new Array<any>();
      tempMenu.push({name:'用户设置',href:'/setting',type:'outside',isSelected:url=='/setting'});
      tempMenu.push({name:'支付设置',href:'/setting/setting-pay',type:'outside',isSelected:url=='/setting/setting-pay'});
      tempMenu.push({name:'会员设置',href:'/setting/setting-member',type:'outside',isSelected:url=='/setting/setting-member'});
      this.siderMenu = tempMenu;
    }
  }

  urlInfo(e){
    console.log(e);
    this.changeRoutes(e);
  }
}
