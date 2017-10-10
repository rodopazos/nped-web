// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// OPT Imports
import { IComponentServiceGet } from '../../services/opt/interfaces/get.interface.opt.service';
import { IComponentServiceConfig } from '../../services/opt/interfaces/config.interface.opt.service';
import { ComponentServiceConfig } from '../../services/opt/classes/config.class.opt.service';

// This Module Imports
import { TabComponent } from './tab.component';
import { TableModule } from '../table/table.module';
import { TreeViewModule } from './../tree/tree.module';
import { ChartViewModule } from './../chart/chart.module';
import { UploadModule } from '../upload/upload.module';
import { AdministrationComponent } from '../administration/administration.component';

// Others Imports
import { TabViewModule } from 'primeng/primeng';


@NgModule({
    imports: [
        TabViewModule,
        TableModule,
        TreeViewModule,
        UploadModule,
        ChartViewModule,
    ],
    declarations: [
        TabComponent,
        AdministrationComponent
    ],
    exports: [
        TabComponent,
    ]
})
export class TabModule {

}
