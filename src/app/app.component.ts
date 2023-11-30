import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){
    console.log("feature 2 branch is in progresss")
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'my-curd-app';

  message:string="welcome to Github & Git"
  message2:string="welcome to Angular Development Course"

  message3:string="Welcome to the new World"
}
