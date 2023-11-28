import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
       FullName:string="Dipali Badgujar";
      Address:string="Pune";
      myObj:any={
        Name:"Dipali",
        Desgination:"Angular Developer",
        Salary: "40000",
        Company:"Google",
        Skills:["Html","Css","Angular","Java"]
      }
      disablebttn :boolean=false;
      message1:string="Welcome To World";
      message2:string="the Indian Currency is rupeees ₹45000"
      Annual_Salary:number=45000;
      todaysDate=new Date()
      imagepath:string=".\C:\Users\admin\Downloads\Ganesh-Ji-Hd-Wallpaper (1).jpg"
}



