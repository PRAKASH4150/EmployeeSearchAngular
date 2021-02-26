import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchByEmployeeIdComponent } from './search-by-employee-id/search-by-employee-id.component';
import { SearchEmployeeByNameComponent } from './search-employee-by-name/search-employee-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchByEmployeeIdComponent,
    SearchEmployeeByNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
