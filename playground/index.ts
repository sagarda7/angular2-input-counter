/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { InputCounterModule }  from 'angular2-input-counter';

@Component({
  selector: 'app',
  template: `<input-counter btnClass="btn btn-primary" inputClass="form-control-inline"></input-counter>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, InputCounterModule.forRoot() ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
