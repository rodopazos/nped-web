// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// This Module's Components
import { AddUserPanelComponent } from './add-user-panel.component';

// Others Imports
import {
    InputTextModule,
    ButtonModule,
    GrowlModule,
    SharedModule,
    FieldsetModule,
    DropdownModule
} from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        GrowlModule,
        SharedModule,
        FieldsetModule,
        DropdownModule
    ],
    declarations: [
        AddUserPanelComponent
    ],
    exports: [
        AddUserPanelComponent
    ]
})
export class AddUserPanelModule { }
