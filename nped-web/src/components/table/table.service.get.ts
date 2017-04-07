// Angular Imports
import { Http, Response } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

// OPT Imports
import { ComponentServiceGet } from '../opt/classes/class.service.get';
import { IComponentServiceConfig } from '../opt/interfaces/interface.service.config';

// Others Imports
import { Observable } from 'rxjs/Rx';
import { ComponentServiceConfig } from '../opt/classes/class.service.config';

@Injectable()
/**
 * Define a TableComponent service provider.
 */
export class TableServiceGet extends ComponentServiceGet {
    /**
     * Creates an instance of TableService.
     *
     * @memberOf TableService
     */
    constructor(@Inject(IComponentServiceConfig) config: IComponentServiceConfig, http: Http) {
        super(config, http, 'table-service-get');
    }
}
