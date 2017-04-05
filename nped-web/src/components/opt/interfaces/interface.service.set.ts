import { OpaqueToken } from '@angular/core';

/**
 * Define an interface to uses in all services component provider
 * that set any data throw http.
 */
export interface IComponentServiceSet {
    setData(data: any): boolean;
}

/**
 * Define a key for identify it at run time.
 */
export let IComponentServiceSet = new OpaqueToken('IComponentServiceSet');
