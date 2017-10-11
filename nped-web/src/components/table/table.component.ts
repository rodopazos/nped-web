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
export class TableComponent implements OnInit {
    @ViewChild(DataTable) dataTable: DataTable;

    tableContent: Array<any>;
    notifications: Array<any>;
    tableColumns: Array<string>;

    ammounts: { [id: string]: number };
    filterOptions: { [key: string]: Array<{ label: string, value: string }> };

    constructor(private service: TableServiceGet, private filter: Filter) {
        this.initializeProperties();
    }

    ngOnInit(): void {
        this.service.getData().subscribe(
            data => {
                this.tableContent = data.json().data;
                this.tableColumns = Object.keys(this.tableContent[0]);

                this.initializeFilterOptions();

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
        this.filterOptions = {};
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

    keys() {
        return Object.keys(this.ammounts);
    }

    total(): string {
        if (this.dataTable.filteredValue == undefined) {
            return this.tableContent.length.toString();
        }
        return this.dataTable.filteredValue.length.toString();
    }

    isDropDownColumn(column: string): boolean {
        return column == 'Sexo' || column == 'Resultado';
    }

    initializeFilterOptions(): void {
        this.tableColumns.forEach(
            column => {
                if (this.isDropDownColumn(column)) {
                    let set = new Set<string>();

                    this.tableContent.forEach(
                        content => set.add(content[column])
                    );
                    let option = new Array<{ label: string, value: string }>();

                    set.forEach(
                        item => option.push({ label: item, value: item })
                    );
                    this.filterOptions[column] = option;
                }
            }
        );
    }
}
