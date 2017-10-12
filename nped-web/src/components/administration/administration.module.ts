// Angular Imports

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// This Module's Components
import { AdministrationComponent } from './administration.component';
import { AddUserPanelModule } from '../add-user-panel/add-user-panel.module';

// Others Imports
import {
    InputTextModule,
    ButtonModule,
    GrowlModule,
    DataTableModule,
    SharedModule,
    FieldsetModule,
    TabViewModule,
    DropdownModule
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
        TabViewModule,
        DropdownModule,
        AddUserPanelModule
    ],
    declarations: [
        AdministrationComponent
    ],
    exports: [
        AdministrationComponent
    ]
})
export class AdministrationModule { }
