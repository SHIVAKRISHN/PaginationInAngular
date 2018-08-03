import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationTestComponent } from './pagination-test/pagination-test.component';
import {  RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe'
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    PaginationTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
      path: '',
      component : PaginationTestComponent,
      pathMatch : 'full'
    },
    {
     path : 'FirstPagination',
      component : PaginationTestComponent
    }
  ]),
  HttpClientModule,
  Ng2SearchPipeModule,
  FormsModule,
  Ng2OrderModule,
  NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
