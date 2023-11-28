import { Component } from '@angular/core';

@Component({
  selector: 'app-otp-vrrification',
  templateUrl: './otp-vrrification.component.html',
  styleUrls: ['./otp-vrrification.component.css']
})
export class OtpVrrificationComponent {
  contactPreference: string = 'Email'; // Set the default preference to 'Email'
  moNO: string = '';                   // Initialize moNO as an empty string
  OTP: string = '';  

  message:string="Otp Matched"

  print(data:any){
    this.message=data.target.value;
    console.log("Otp Matched",this.message);
  }
}
