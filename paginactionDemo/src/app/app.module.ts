import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FilterPipe} from './filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent, FilterPipe 
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule ,
    NgbModule.forRoot(),
    FormsModule
  ],// <-- include it in your app module
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
