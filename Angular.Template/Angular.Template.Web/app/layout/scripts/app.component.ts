import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    templateUrl: '../app.component',
    styleUrls: ['../styles/app.component.scss'],
    providers: [Title]
})
export class AppComponent implements OnInit, OnDestroy {

    isDarkTheme = false;

    constructor(private titleService: Title) {

    }


    ngOnInit() {
        console.log('AppComponent on init...');
        this.titleService.setTitle('AG2 Title');
    }

    ngOnDestroy() {
        console.log('AppComponent on destroy...');
    }
}