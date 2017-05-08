import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { OpaqueToken } from '@angular/core';

/**
 * Define an interface to uses in all services component provider
 * that get any data throw http.get method.
 */
export interface IComponentServiceGet {
    getData(): Observable<Response>;
}

/**
 * Define a key for identify it at run time.
 */
export let IComponentServiceGet = new OpaqueToken('IComponentServiceGet');
