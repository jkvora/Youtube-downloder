import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {MatButtonModule, MatCheckboxModule,MatToolbarModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [    
    AppComponent,
  
  ],
  imports: [
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    BrowserModule.withServerTransition({appId:'youtube-app'})
    
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
