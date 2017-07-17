// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// OPT Imports
import { IComponentServiceGet } from '../../services/opt/interfaces/get.interface.opt.service';
import { IComponentServiceConfig } from '../../services/opt/interfaces/config.interface.opt.service';
import { ComponentServiceConfig } from '../../services/opt/classes/config.class.opt.service';

// This Module Imports
import { TableComponent } from './table.component';
import { TableServiceGet } from './table.service.get';

// Others Imports
import { DataTableModule, SharedModule, ButtonModule, GrowlModule } from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        DataTableModule,
        SharedModule,
        ButtonModule,
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
