import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent
 {  
  count:number=0;
//  name_of_members:string[]=["dipali","akshda","tapsya","abhi"]
//  names_of_city:any={pune:"kharadi",
//                      mumbai:"thane",
//                     nashik:"gjfgfj"}
//                     isBtnDisabled :boolean=false  
//                     login(){
//                       console.log("login success")
//                     }  
                    addToCart(){
                      this.count++
                    }
                    removeFromCart(){
                      this.count--
                    }
                    // count(){

                    // }  

}
