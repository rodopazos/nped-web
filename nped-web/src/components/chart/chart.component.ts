import { Component,Inject, OnInit } from '@angular/core';

import { ChartServiceGet } from './chart.service.get';
import { IComponentServiceGet } from '../../services/opt/interfaces/get.interface.opt.service';


@Component({
    selector: 'app-chart-component',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    data: any;   //duh...
    type: string;  //chart type (pie,donut,line ... )
    column: string;  //column to filter
    percent: boolean;  //percent or total


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
    }

    private initializeProperties():void {
        this.type = "doughnut";
        this.column = "resultado";
        this.data = {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'First Dataset',
                            data: [65, 59, 80, 81, 56, 55, 40]
                        },
                        {
                            label: 'Second Dataset',
                            data: [28, 48, 40, 19, 86, 27, 90]
                        }
                    ]
        }
    }



    private calculatePercent(n:number,t:number): number {
        return n*100/t;
    }
    

    genericChartData(data:Array<any>){
        let total = 0;
        let dataset : { [id: string]: number };
        for (let i = 0; i < data.length; i++) {
            if( dataset[data[i][this.column]] == undefined ){
                dataset[data[i][this.column]] = 1;
            } else {
                dataset[data[i][this.column]]+= 1;
            }
            total+=1;
        }
        let newData:Array<number> = [];
        let labels: Array<string>;
        for (var key in dataset) {
            labels.push(key);
            newData.push((!this.percent)? dataset[key]: this.calculatePercent(dataset[key],total));
        }
           

    }
    


    //cada dataset es un resultado que quiera mostrar
    chartData(data: Array<any>): any{
        let a = {
            'femenino' : 0,
            'masculino' : 0 
        }       
        for (let i = 0; i < data.length; i++) {
            if( data[i]['Sexo'] == "F"){
                a['femenino']+=1;
            } else {
                a['masculino']+= 1;
            }
        }

        return {
            labels : Object.keys(a),
            datasets: [
                {
                    label: 'Genero',
                    data: [a['femenino'],a['masculino']]
                }]
        }  
    }
}
