// Angular Imports
import { Component, Inject, OnInit } from '@angular/core';

// OPT Imports
import { IComponentServiceGet } from '../../services/opt/interfaces/get.interface.opt.service';

// This Module Imports
import { TreeServiceGet } from './tree.service.get';

@Component({
    selector: 'app-tree-component',
    templateUrl: 'tree.component.html',
    styleUrls: ['tree.component.scss']
})
export class TreeComponent implements OnInit {
    treeContent: Array<any>;

    constructor(private service: TreeServiceGet) {
        this.initializeProperties();
    }

    /**
     * Get the tree necessary data for the component and set the treeContent and
     * tableColumns properties.
     *
     * @memberOf TreeComponent
     */
    ngOnInit(): void {
        this.service.getData().subscribe(
            data => {
                this.treeContent = data.json().data;
            },
            error => {
                this.initializeProperties();
            }
        );
    }

    private initializeProperties(): void {
        this.treeContent = new Array<any>();
    }

}
