import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeroFormComponent } from './hero-form/hero-form.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule],
  declarations: [ AppComponent, HeroFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
