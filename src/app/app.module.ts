import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {MatButtonModule, MatCheckboxModule,MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [    
    AppComponent,
  
  ],
  imports: [
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    BrowserModule
    
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
