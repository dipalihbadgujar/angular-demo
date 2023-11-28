import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  productList:any = [
    {productName:"iphone 13",price:45000,quantity:1},
    {productName:"one plus",price:35000,quantity:1},
    {productName:"table",price:5000,quantity:5},
    {productName:"TV",price:45000,quantity:2},
 ]

 selectedDay:string="";
weekdays:string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']


}
