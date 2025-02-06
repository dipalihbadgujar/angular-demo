import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
       FullName:string="Dipali Badgujar";
      Address:string="Pune";

      MeraName:string="Dipali HAi";
      myObj:any={
        Name:"Dipali",
        Desgination:"Angular Developer",
        Salary: "40000",
        Company:"Google",
        Skills:["Html","Css","Angular","Java"],
        Goal:"Beacome a succesful software developer"
      }
      disablebttn :boolean=false;
      message1:string="Welcome To World";
      message2:string="the Indian Currency is rupeees ₹45000"
      Annual_Salary:number=45000;
      todaysDate=new Date()
      imagepath:string="https://auctions.c.yimg.jp/images.auctions.yahoo.co.jp/image/dr000/auc0405/users/5e10755c7608675bd07a70cfb807592df802cbf4/i-img1200x1200-1685252891efwtqd111776.jpg"


}



