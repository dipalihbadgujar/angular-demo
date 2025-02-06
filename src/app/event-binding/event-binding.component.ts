import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  count:number=0;
 login(){
  console.log("loginSuccess")
 }
 Add(){
  ++this.count
  console.log("count incrrement")
 }
 Remove(){
--this.count
console.log("count decremerehr")
 }
 performaction(actionName:string){
  if(actionName==='Increment'){
   this.count++
  }
  else{
    this.count--
  }
 }

 print(){
  console.log("over me")
 }

 getdata(data:any){
  console.log("change is fired",data);
 }
}
