import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
 num1!:number;
 num2!:number;
 num3!:number;
 add(){
  this.num3=(this.num1+this.num2)
}
subtract(){
   this.num3=(this.num1-this.num2)
}
mul(){
this.num3=(this.num1*this.num2)
}
division(){
 this.num3=(this.num1/this.num2)
}

}
