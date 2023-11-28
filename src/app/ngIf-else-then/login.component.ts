import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  contactPreference:string="Email";

  listofcourses:string[]=['Angular','Java','CSS','Html','AWS','Software testing']
}
