// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// This Module Imports
import { LoaderComponent } from './loader.component';

// Others Imports
import { FileUploadModule, GrowlModule } from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        FileUploadModule,
        GrowlModule
    ],
    declarations: [
        LoaderComponent,
    ],
    exports: [
        LoaderComponent,
    ]
})
export class LoaderModule {

}
