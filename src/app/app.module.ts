import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingListComponent } from './scrolling-list/scrolling-list.component';
import { ConversionCalculatorComponent } from './conversion-calculator/conversion-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollingListComponent,
    ConversionCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
