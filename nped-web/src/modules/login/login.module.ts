// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

// This Module's Components
import { LoginComponent } from './login.component';
import { LoginServiceGet } from './login.service.get';

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
    ],
    exports: [
        LoginComponent
    ],
    providers: [
        LoginServiceGet
    ]
})
export class LoginModule {

}
