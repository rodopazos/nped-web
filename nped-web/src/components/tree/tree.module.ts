// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// OPT Imports
import { IComponentServiceGet } from '../../services/opt/interfaces/get.interface.opt.service';
import { IComponentServiceConfig } from '../../services/opt/interfaces/config.interface.opt.service';
import { ComponentServiceConfig } from '../../services/opt/classes/config.class.opt.service';

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
