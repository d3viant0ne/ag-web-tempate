import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate';
import { Ng2Webstorage } from 'ng2-webstorage';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Ng2Webstorage,
        TranslateModule,
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        Ng2Webstorage,
        TranslateModule,
        MaterialModule,
        FlexLayoutModule
    ]
})
export class SharedModule { }