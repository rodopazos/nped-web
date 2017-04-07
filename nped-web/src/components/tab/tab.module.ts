// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// OPT Imports
import { IComponentServiceGet } from '../opt/interfaces/interface.service.get';
import { IComponentServiceConfig } from '../opt/interfaces/interface.service.config';
import { ComponentServiceConfig } from '../opt/classes/class.service.config';

// This Module Imports
import { TabComponent } from './tab.component';
import { UploadModule } from '../upload/upload.module';
import { TableModule } from '../table/table.module';
import { TreeViewModule } from './../tree/tree.module';

// Others Imports
import {TabViewModule} from 'primeng/primeng';

@NgModule({
    imports: [
        TabViewModule,
        UploadModule,
        TableModule,
        TreeViewModule
    ],
    declarations: [
        TabComponent,
    ],
    exports: [
        TabComponent,
    ]
})
export class TabModule {

}
