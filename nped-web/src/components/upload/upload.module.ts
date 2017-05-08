// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// This Module Imports
import { UploadComponent } from './upload.component';

// Others Imports
import { FileUploadModule, GrowlModule } from 'primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        FileUploadModule,
        GrowlModule
    ],
    declarations: [
        UploadComponent,
    ],
    exports: [
        UploadComponent,
    ]
})
export class UploadModule {

}
