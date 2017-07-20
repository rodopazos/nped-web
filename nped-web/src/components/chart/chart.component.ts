import { Component, Inject, OnInit, Input } from '@angular/core';
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
    cols: SelectItem[];
    type: string;  //chart type (pie,donut,line ... )
    column: string;  //column to filter
    @Input() percent: boolean;  //percent or total
    @Input() colors: Array<string>;
    @Input() columns: string[];
    options: any;

    constructor(private service: ChartServiceGet) {
        this.initializeProperties();
    }
    ngOnInit() {
        this.service.getData().subscribe(
            data => {
                this.data = this.chartData(data.json().data);
            },
            error => {
                this.initializeProperties();
            }
        );
        this.columns = ['Resultado','Sexo'];
        for (var i = 0; i < this.columns.length; i++) {
            this.cols.push({ label: this.columns[i], value: this.columns[i] });
        }
        
        console.log(this.cols);
        console.log(this.columns);
    }

    private initializeProperties(): void {
        this.type = "pie";
        this.percent = true;
        this.column = "Resultado";
        this.data = [];
        this.cols =[];
    }

    filter(data: Array<any>, column: string): { [id: string]: number } {
        let dataset: { [id: string]: number } = {};
        for (let i = 0; i < data.length; i++) {
            let b = data[i][this.column];
            console.log(b);
            if (dataset[data[i][this.column]] == undefined) {
                dataset[data[i][this.column]] = 1;
            } else {
                dataset[data[i][this.column]] += 1;
            }
        }
        return dataset;
    }

    chartData(data: Array<any>) {
        let dataset = this.filter(data, this.column);
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
