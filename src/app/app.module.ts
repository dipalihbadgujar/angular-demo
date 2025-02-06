import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ngIf-else-then/login.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { pipe } from 'rxjs';
import { DirectivesPracticeComponent } from './directives-practice/directives-practice.component';
import { DependentDropdownComponent } from './dependent-dropdown/dependent-dropdown.component';
import { PracticeComponent } from './practice/practice.component';
import { OtpVrrificationComponent } from './otp-vrrification/otp-vrrification.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { NewComponent } from './new/new.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataBindingComponent,
    CalculatorComponent,
    AgeCalculatorComponent,
    DirectivesPracticeComponent,
    DependentDropdownComponent,
    PracticeComponent,
    OtpVrrificationComponent,
    ProductlistComponent,
    TemplateDrivenFormComponent,
    NewComponent,
    EventBindingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
