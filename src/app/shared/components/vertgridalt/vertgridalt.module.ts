import { NgModule }      from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import 'hammerjs';

import { VertgridaltComponent }   from './vertgridalt.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, GridModule ],
  declarations: [ VertgridaltComponent ],
  bootstrap:    [ VertgridaltComponent ]
})

export class AppModule { }
