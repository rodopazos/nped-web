// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// This Module Imports
import { DashboardPage } from './pages/dashboard.page';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';
import { UploadComponent } from './components/upload/upload.component';

import { TableServiceGet } from './services/table.service.get';
import { TreeServiceGet } from './services/tree.service.get';

// Others Imports
import {
    TabViewModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    GrowlModule,
    FileUploadModule,
    TreeModule,
    TreeNode
} from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        DataTableModule,
        SharedModule,
        ButtonModule,
        GrowlModule,
        TabViewModule,
        FileUploadModule,
        TreeModule
    ],
    declarations: [
        DashboardPage,
        TableComponent,
        UploadComponent,
        TreeComponent
    ],
    exports: [
        DashboardPage
    ],
    providers: [
        TableServiceGet,
        TreeServiceGet
    ]
})
export class DashboardModule {

}
