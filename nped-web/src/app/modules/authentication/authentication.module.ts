// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

// This Module's Components
import { LoginComponent } from './components/login/login.component';
import { LoginPage } from './pages/login/login.page';
import { LoginServiceGet } from './services/login.service.get';

// Others Imports
import { InputTextModule, ButtonModule, GrowlModule } from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        GrowlModule
    ],
    declarations: [
        LoginComponent,
        LoginPage
    ],
    exports: [
        LoginComponent,
        LoginPage
    ],
    providers: [
        LoginServiceGet
    ]
})
export class AuthenticationModule {

}
