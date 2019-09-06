import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './layouts/home/home.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CardOwnersComponent } from './components/card-owners/card-owners.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardOwnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
