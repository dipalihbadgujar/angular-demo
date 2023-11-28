import { Component } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent {
  birthdate: string = '';
  age: number | null = null;

  calculateAge() {
    if (this.birthdate) {
      const birthdate = new Date(this.birthdate);
      const today = new Date();
      const ageDiff = today.getFullYear() - birthdate.getFullYear();
      if (today < new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate())) {
        this.age = ageDiff - 1;
      } else {
        this.age = ageDiff;
      }
    }
  }
}
