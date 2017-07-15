import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { OpaqueToken } from '@angular/core';

/**
 * Define an interface to uses in a configuration getter services.
 */
export interface IComponentServiceConfig {
    getConfig(key: string): string;
}

/**
 * Define a key for identify it at run time.
 */
export let IComponentServiceConfig = new OpaqueToken('IComponentServiceConfig');
