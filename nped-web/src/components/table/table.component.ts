// Angular Imports
import { Component, Inject, OnInit} from '@angular/core';

// OPT Imports
import { IComponentServiceGet } from '../opt/interfaces/interface.service.get';

// This Module Imports
import { TableService } from './table.service';

@Component({
    selector: 'app-table-component',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})
/**
 * Define a component to use as a table.
 *
 * Dependencies:
 *     DataTableModule
 *     SharedModule
 *
 * Providers:
 *     TableService
 *
 * Implement:
 *     OnInit interface
 */
export class TableComponent implements OnInit {
    /**
     * Define a property used by primeNG <p-dataTable></p-dataTable> component.
     *
     * @type {Array<any>}
     * @memberOf TableComponent
     */
    tableContent: Array<any>;

    /**
     * Define a property used by primeNG <p-dataTable></p-dataTable> component header
     * and field properties. This contain the headers of the columns of the table.
     * This property is auto load from tableContent property.
     *
     * @type {Array<string>}
     * @memberOf TableComponent
     */
    tableColumns: Array<string>;

    /**
     * Define a property to use by <p-growl> notification component.
     *
     * @type {Array<any>}
     * @memberOf TableComponent
     */
    notifications: Array<any>;

    /**
     * Creates an instance of TableComponent with the needed IComponentService provider
     * and initialize tableContent and tableColumns properties.
     *
     * @param {TableService} service
     *
     * @memberOf TableComponent
     */
    constructor(@Inject(IComponentServiceGet) private service: IComponentServiceGet) {
        this.initializeProperties();
    }

    /**
     * Get the table necessary data for the component and set the tableContent and
     * tableColumns properties.
     *
     * @memberOf TableComponent
     */
    ngOnInit(): void {
        this.service.getData().subscribe(
            data => {
                this.tableContent = data.json().data;
                this.tableColumns = Object.keys(this.tableContent[0]);
                this.notify(true);
            },
            error => {
                this.initializeProperties();
                this.notify(false);
            }
        );
    }

    private initializeProperties(): void {
        this.tableContent = new Array<any>();
        this.tableColumns = new Array<string>();
        this.notifications = new Array<any>();
    }

    private notify(status: boolean): void {
        if (status) {
            this.notifications.push({severity: 'info', summary: 'Load susses', detail: 'All data has been loaded'});
        }
        else {
            this.notifications.push({severity: 'error', summary: 'Load fail', detail: 'Data can not be load'});
        }
    }
}
