import { Injectable } from '@angular/core';

import { IComponentServiceConfig } from '../interfaces/interface.service.config';
import { SERVICES_CONFIG } from '../services.config';

@Injectable()
/**
 * Define a class used in Components Services Provider to get
 * the default configuration for its.
 */
export class ComponentServiceConfig implements IComponentServiceConfig {
    /**
     *
     *
     * @type {*}
     * @memberOf ComponentServiceConfig
     */
    config: any;

    constructor() {
        this.load();
     }
    /**
     * Return the appropriated configuration entry by a given key.
     *
     * @param {string} key
     * @returns {string}
     *
     * @memberOf ComponentServiceConfig
     */
    getConfig(key: string): string {
        return this.config[key];
    }

    /**
     * Load the configuration file.
     *
     *
     * @memberOf ComponentServiceConfig
     */
    load(): void {
        this.config = SERVICES_CONFIG;
    }
}
