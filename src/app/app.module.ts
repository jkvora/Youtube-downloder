import { AppRouterModule } from './app.router.module';
import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {MatButtonModule, MatCheckboxModule,MatToolbarModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UrlbarComponent } from './urlbar/urlbar.component';


@NgModule({
  declarations: [    
    AppComponent, NavbarComponent, UrlbarComponent,
  
  ],
  imports: [
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    AppRouterModule,
    BrowserModule.withServerTransition({appId:'youtube-app'})
    
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
