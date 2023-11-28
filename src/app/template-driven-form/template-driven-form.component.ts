import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  userForm:User = new User();

  save(form:any){
   console.log("form Data without modal",form.value);
   console.log("form data with modal",this.userForm);
  }
  constructor(){

  }
  
}


class User {
  firstName!:string;
  lastName!:string;
  mobileNo!:number;
  email!:string;
}


