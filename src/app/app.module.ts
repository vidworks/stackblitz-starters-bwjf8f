import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MultiComboExComponent} from "./multi-combo-ex/multi-combo-ex.component";
import { AppComponent } from './app.component';



@NgModule({
  declarations: [MultiComboExComponent, AppComponent],
  imports: [
    CommonModule, BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
