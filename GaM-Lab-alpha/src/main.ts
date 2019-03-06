import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';


import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';

import {toolbar} from './app/toolbar/toolbar';
import {footbar} from './app/toolbar/footbar';
import {Cards} from './app/cards/cards'


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [toolbar, footbar, Cards],
  declarations: [toolbar, footbar, Cards],
  bootstrap: [toolbar, footbar, Cards],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
