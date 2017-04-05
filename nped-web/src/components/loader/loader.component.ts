import { Component } from '@angular/core';

@Component({
    selector: 'app-loader-component',
    templateUrl: 'loader.component.html',
    styleUrls: ['loader.component.scss']
})
export class LoaderComponent {
    notifications: Array<any>;

    uploadedFiles: Array<any>;

    constructor() {
        this.notifications = new Array<any>();
        this.uploadedFiles = new Array<any>();
    }

    onUpload(event): void {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
        this.notifications.push({severity: 'info', summary: 'File Uploaded', detail: 'OK'});
    }

    onError(event): void {
        console.error(event);

        this.notifications.push({severity: 'error', summary: "Can't Upload", detail: 'Fail'});
    }
}
