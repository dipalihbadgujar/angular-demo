import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrls: ['./directives-practice.component.css']
})
export class DirectivesPracticeComponent {
  isShow:boolean = true ;
isDisplay:boolean = false ;

toggle(){
    this.isDisplay = !this.isDisplay;
}

contactPreference:string="Mobile";

}
