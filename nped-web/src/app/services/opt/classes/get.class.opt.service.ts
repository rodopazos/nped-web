import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { IComponentServiceGet } from '../interfaces/get.interface.opt.service';
import { IComponentServiceConfig } from '../interfaces/config.interface.opt.service';

@Injectable()
/**
 * Define a class to extend in all Components Services Provider
 * that can get data throw http.get method.
 */
export abstract class ComponentServiceGet implements IComponentServiceGet {
    /**
     *
     *
     * @protected
     * @type {string}
     * @memberOf ComponentServiceGet
     */
    protected key: string;
    /**
     * Creates an instance of ComponentServiceGet.
     *
     * @memberOf ComponentServiceGet
     */
    constructor(
        @Inject(IComponentServiceConfig)
        private config: IComponentServiceConfig,
        private http: Http,
        key: string
    ) {
        this.key = key;
    }

    getData(): Observable<Response> {
        return this.http.get(this.config.getConfig(this.key));
    }
}
