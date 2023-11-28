import { Component } from '@angular/core';

@Component({
  selector: 'app-dependent-dropdown',
  templateUrl: './dependent-dropdown.component.html',
  styleUrls: ['./dependent-dropdown.component.css']
})
export class DependentDropdownComponent {
  selectedCategory: string = ''; // Add this property
  selectedSubItem: string = ''; // Add this property
 categories:any=
  {Fruits:["fresh fruits","fresh vegetables"],
 foodgrains:["dal","dry fruits"]};
}


