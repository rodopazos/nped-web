import { Component } from '@angular/core';

@Component({
    selector: 'app-upload-component',
    templateUrl: 'upload.component.html',
    styleUrls: ['upload.component.scss']
})
export class UploadComponent {
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
        this.notifications.push({severity: 'info', summary: 'Se ha subido el archivo correctamente', detail: 'OK'});
    }

    onError(event): void {
        console.error(event);

        this.notifications.push({severity: 'error', summary: "No se ha podido subir el archivo", detail: 'Fail'});
    }
}
