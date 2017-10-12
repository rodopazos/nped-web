// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// This Module's Components
import { TableUserPanelComponent } from './table-user-panel.component';

// Others Imports
import {
    InputTextModule,
    ButtonModule,
    GrowlModule,
    SharedModule,
    FieldsetModule,
    DropdownModule,
    DataTableModule,
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
        TabViewModule,
        DropdownModule,
    ],
    declarations: [
        TableUserPanelComponent
    ],
    exports: [
        TableUserPanelComponent
    ]
})
export class TableUserPanelModule { }
