// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// OPT Imports
import { IComponentServiceGet } from '../opt/interfaces/interface.service.get';
import { IComponentServiceConfig } from '../opt/interfaces/interface.service.config';
import { ComponentServiceConfig } from '../opt/classes/class.service.config';

// This Module Imports
import { TableComponent } from './table.component';
import { TableServiceGet } from './table.service.get';

// Others Imports
import { DataTableModule, SharedModule, GrowlModule } from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        DataTableModule,
        SharedModule,
        GrowlModule
    ],
    declarations: [
        TableComponent,
    ],
    exports: [
        TableComponent,
    ],
    providers: [
        TableServiceGet
    ]
})
export class TableModule {

}
