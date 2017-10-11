// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// This Module's Components
import { AdministrationComponent } from './administration.component';

// Others Imports
import {
    InputTextModule,
    ButtonModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FieldsetModule,
    TabViewModule
} from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        GrowlModule,
        DataTableModule,
        SharedModule,
        FieldsetModule,
        TabViewModule
    ],
    declarations: [
        AdministrationComponent
    ],
    exports: [
        AdministrationComponent
    ]
})
export class AdministrationModule { }
