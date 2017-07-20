import { Inject, Injectable } from '@angular/core';


@Injectable()
export class Filter {
    
    filter(data: Array<any>, column: string): { [id: string]: number }  {
        let dataset: { [id: string]: number } = {};
        for (let i = 0; i < data.length; i++) {
            let b = data[i][column];
            console.log(b);
            if (dataset[data[i][column]] == undefined) {
                dataset[data[i][column]] = 1;
            } else {
                dataset[data[i][column]] += 1;
            }
        }
        return dataset;
    }
}