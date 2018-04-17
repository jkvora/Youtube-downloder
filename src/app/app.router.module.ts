import { AppComponent } from './app.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { UrlbarComponent } from './urlbar/urlbar.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    {
        //Default
        path: '',
        component: UrlbarComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: UrlbarComponent,
        pathMatch: 'full'
    }

]

@NgModule({

    imports: [
        RouterModule.forRoot(routes),
    ],


    exports: [RouterModule]

})
export class AppRouterModule { }
