// Angular Imports
import { Http, Response } from '@angular/http';
import { Injectable, Inject } from '@angular/core';

// OPT Imports
import { ComponentServiceGet } from '../../services/opt/classes/get.class.opt.service';
import { IComponentServiceConfig } from '../../services/opt/interfaces/config.interface.opt.service';

// Others Imports
import { Observable } from 'rxjs/Rx';
import { ComponentServiceConfig } from '../../services/opt/classes/config.class.opt.service';

@Injectable()
/**
 * Define a ChartComponent service provider.
 */
export class ChartServiceGet extends ComponentServiceGet {
    /**
     * Creates an instance of ChartService.
     *
     * @memberOf ChartService
     */
    constructor(@Inject(IComponentServiceConfig) config: IComponentServiceConfig, http: Http) {
        super(config, http, 'chart-service-get');
    }
}