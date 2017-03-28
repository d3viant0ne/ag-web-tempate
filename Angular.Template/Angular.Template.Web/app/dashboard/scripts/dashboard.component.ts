import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridOptions, ColDef } from 'ag-grid/main';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import * as moment from 'moment';

@Component({
    selector: 'dashboard',
    templateUrl: '../dashboard.component',
    styleUrls: ['../styles/dashboard.component']
})
export class DashboardComponent implements OnInit, OnDestroy {

    dialogRef: MdDialogRef<PizzaDialog> | null;
    private gridOptions: GridOptions;

    constructor(
        private dialog: MdDialog,
        private mdSnackbar: MdSnackBar
    ) { }

    openDialog() {
        this.dialogRef = this.dialog.open(PizzaDialog, {
            disableClose: false
        });

        this.dialogRef.afterClosed().subscribe(result => {
            console.log('result: ' + result);
            this.dialogRef = null;
        });
    }

    popSnackbar() {
        this.mdSnackbar.open(`Have a good day!`, `Zavrit`,
            {
                announcementMessage: 'announcement!',
                politeness: 'polite',
                duration: 3000
            });
    }

    ngOnInit() {

        this.gridOptions = <GridOptions>{
            columnDefs: [
                <ColDef>{
                    headerName: 'ID',
                    width: 100,
                    checkboxSelection: false,
                    suppressSorting: false,
                    field: 'id'
                },
                <ColDef>{
                    headerName: 'NAME',
                    width: 100,
                    checkboxSelection: false,
                    suppressSorting: false,
                    field: 'name',
                    cellRenderer: (params: any) => {
                        return `<span>cell renderer ${params.value} <md-icon>fingerprint</md-icon></span>`;
                    }
                },
            ],
            rowData: [],
            suppressCellSelection: true,
            suppressRowClickSelection: true,
            suppressHorizontalScroll: false,
            suppressMenuHide: false,
            enableSorting: false,
            enableColResize: true,
            enableFilter: false,
            rowHeight: 48,
            icons: {
                menu: '<i class="fa fa-bars"/>',
                filter: '<i class="fa fa-filter"/>',
                sortAscending: '<i class="fa fa-sort-numeric-asc"/>',
                sortDescending: '<i class="fa fa-sort-numeric-desc"/>',
                groupExpanded: '<i class="fa fa-minus-square-o"/>',
                groupContracted: '<i class="fa fa-plus-square-o"/>',
                columnGroupOpened: '<i class="fa fa-minus-square-o"/>',
                columnGroupClosed: '<i class="fa fa-plus-square-o"/>'
            },
            onGridReady: () => {
                this.gridOptions.api!.setRowData([{ id: 1, name: 'jednicka' }, { id: 2, name: 'dvojka' }]);
                this.gridOptions.api!.sizeColumnsToFit();
                let foo = moment();
                console.log(foo);
            }
        };
    }

    ngOnDestroy() {
        console.log('Dashboard on destroy...');
    }
}

@Component({
    selector: 'pizza-dialog',
    template: `
  <h1 md-dialog-title>Would you like to order pizza?</h1>

  <md-dialog-actions>
    <button (click)="dialogRef.close('yes')">Yes</button>
    <button md-dialog-close>No</button>
  </md-dialog-actions>
  `
})
export class PizzaDialog {
    constructor(public dialogRef: MdDialogRef<PizzaDialog>) { }
}