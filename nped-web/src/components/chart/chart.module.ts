// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// OPT Imports
import { IComponentServiceGet } from '../../services/opt/interfaces/get.interface.opt.service';
import { IComponentServiceConfig } from '../../services/opt/interfaces/config.interface.opt.service';
import { ComponentServiceConfig } from '../../services/opt/classes/config.class.opt.service';

// This Module Imports
import { ChartComponent } from './chart.component';
import { ChartServiceGet } from './chart.service.get';
import { ChartModule } from 'primeng/primeng';

// Others Imports

@NgModule({
    imports: [
        BrowserModule,
        ChartModule,
    ],
    declarations: [
        ChartComponent,
    ],
    exports: [
        ChartComponent,
    ],
    providers: [
        ChartServiceGet
    ]
})
export class ChartViewModule {

}
