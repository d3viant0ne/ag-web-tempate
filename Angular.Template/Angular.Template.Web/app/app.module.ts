import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdIcon } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from 'ng2-translate';
import { Ng2Webstorage } from 'ng2-webstorage';
import { WildcardRoutingModule } from './wildcard-routing.module';

import { AppComponent } from './layout/scripts/app.component';
import { DashboardComponent, PizzaDialog } from './dashboard/scripts/dashboard.component';

import { AgGridModule } from 'ag-grid-angular/main';

import { HelperService } from './shared/services/helper.service';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        AgGridModule.withComponents([
            MdIcon
        ]),
        MaterialModule,
        FlexLayoutModule,
        TranslateModule.forRoot(),
        Ng2Webstorage.forRoot({ prefix: 'intens', separator: '.' }),
        WildcardRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        PizzaDialog
    ],
    providers: [
        HelperService
    ],
    entryComponents: [
        PizzaDialog
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }