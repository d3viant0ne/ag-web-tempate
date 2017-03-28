﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const wildcardRoute: Routes = [
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(wildcardRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class WildcardRoutingModule { }