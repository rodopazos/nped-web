// Angular Imports
import { Component, Inject, OnInit, ViewChild } from '@angular/core';

// OPT Imports
import { IComponentServiceGet } from '../../services/opt/interfaces/get.interface.opt.service';

// This Module Imports
import { TableServiceGet } from './table.service.get';
import { DataTable } from 'primeng/primeng';
import { Filter } from '../../services/globals/filter';


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
     * @param {TableServiceGet} service
     *
     * @memberOf TableComponent
     */

    @ViewChild(DataTable) dataTable: DataTable;
    ammounts: { [id: string]: number };

    constructor(private service: TableServiceGet, private filter: Filter) {
        this.initializeProperties();
    }

    /**
     * Get the table necessary data for the component and set the tableContent and
     * tableColumns properties.
     *
     * @memberOf TableComponent
     */
    keys() {
        return Object.keys(this.ammounts);
    }
    total(): string {
        if (this.dataTable.filteredValue == undefined) {
            return this.tableContent.length.toString();
        }
        return this.dataTable.filteredValue.length.toString();
    }

    ngOnInit(): void {
        this.service.getData().subscribe(
            data => {
                this.tableContent = data.json().data;
                this.tableColumns = Object.keys(this.tableContent[0]);
                this.ammounts = this.filter.filter(this.tableContent, "Resultado");
                this.notify(true);
            },
            error => {
                this.initializeProperties();
                this.notify(false);
            }
        );
        this.dataTable.onFilter.subscribe(e => {

            if (!this.dataTable.filteredValue)
                this.dataTable.filteredValue=this.tableContent;
            this.filter.filter(this.dataTable.filteredValue, "Resultado") ;
        })
    }

    private initializeProperties(): void {
        this.tableContent = new Array<any>();
        this.tableColumns = new Array<string>();
        this.notifications = new Array<any>();
        this.ammounts = {};
    }

    private notify(status: boolean): void {
        if (status) {
            this.notifications.push({
                severity: 'info',
                summary: 'Datos Actualizados',
                detail: 'Todos los datos han sido cargados'
            });
        }
        else {
            this.notifications.push({
                severity: 'error',
                summary: 'Error',
                detail: 'Los datos no se han podido cargar'
            });
        }
    }
}
