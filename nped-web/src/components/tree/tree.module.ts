// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// OPT Imports
import { IComponentServiceGet } from '../opt/interfaces/interface.service.get';
import { IComponentServiceConfig } from '../opt/interfaces/interface.service.config';
import { ComponentServiceConfig } from '../opt/classes/class.service.config';

// This Module Imports
import { TreeComponent } from './tree.component';
import { TreeServiceGet } from './tree.service.get';

// Others Imports
import {TreeModule, TreeNode, GrowlModule} from 'primeng/primeng';


@NgModule({
    imports: [
        BrowserModule,
        TreeModule,
        GrowlModule
    ],
    declarations: [
        TreeComponent,
    ],
    exports: [
        TreeComponent,
    ],
    providers: [
        TreeServiceGet
    ]
})
export class TreeViewModule {

}
