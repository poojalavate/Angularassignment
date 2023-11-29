import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { GridComponent } from './grid/grid.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
     GridComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
