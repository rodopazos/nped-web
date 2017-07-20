import { Component, Inject, OnInit, Input, ViewChild } from '@angular/core';
import { ChartServiceGet } from './chart.service.get';
import { IComponentServiceGet } from '../../services/opt/interfaces/get.interface.opt.service';
import { Filter } from '../../services/globals/filter';
import { SelectItem, Dropdown } from 'primeng/primeng';
@Component({
    selector: 'app-chart-component',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
    data: any;
    originalData: any;
    cols: SelectItem[];
    type: string;  //chart type (pie,donut,line ... )
    column: string;  //column to filter
    @Input() percent: boolean;  //percent or total
    @Input() colors: Array<string>;
    @Input() columns: string[];
    options: any;
    @ViewChild(Dropdown) dropdown: Dropdown;


    constructor(private service: ChartServiceGet, private filter: Filter) {
        this.initializeProperties();
    }


    ngOnInit() {
        
        this.service.getData().subscribe(
            data => {
                this.originalData = data.json().data;
                this.data = this.chartData(this.originalData);
                
            },
            error => {
                this.initializeProperties();
            }
        );

        this.dropdown.onChange.subscribe(e => {
            this.column = e.value;
            this.data = this.chartData(this.originalData);
            
        });
        if (this.cols.length == 0) {   //Parche
            for (var i = 0; i < this.columns.length; i++) {
                this.cols.push({ label: this.columns[i], value: this.columns[i] });
            }
        }
    }



    private initializeProperties(): void {
        this.type = "pie";
        this.percent = true;
        this.column = "Resultado";
        this.data = [];
        this.cols = [];
        
    }

    chartData(data: Array<any>) {
        let dataset = this.filter.filter(data, this.column);
        let newData: Array<number> = [];
        let labels: Array<string> = [];
        for (var key in dataset) {
            labels.push(key);
            newData.push((!this.percent) ? dataset[key] : Math.floor(this.calculatePercent(dataset[key], data.length
            )));
        }
        this.options = {
            title: {
                display: true,
                text: this.column,
                fontSize: 28
            },
            legend: {
                position: 'bottom'
            }
        };

        return {
            labels: labels,
            datasets: [
                {
                    backgroundColor: this.colors.slice(0, newData.length),
                    label: this.column,
                    data: newData
                }]
        }
    }
    private calculatePercent(n: number, t: number): number {
        return n * 100 / t;
    }
}
