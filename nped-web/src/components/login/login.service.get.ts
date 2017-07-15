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
 * Define a LoginComponent service provider.
 */
export class LoginServiceGet extends ComponentServiceGet {
    /**
     * Creates an instance of TableService.
     *
     * @memberOf TableService
     */
    constructor(@Inject(IComponentServiceConfig) config: IComponentServiceConfig, http: Http) {
        super(config, http, 'login-service-get');
    }
}
