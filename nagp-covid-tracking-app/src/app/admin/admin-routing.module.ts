import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLoginComponent} from './admin-login/admin-login.component';

const adminRoutes: Routes=[
    {
        path:'',
        component:AdminLoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),
        ],
    exports: [RouterModule]
})

export class AdminRoutingModule{
    constructor(){
        console.log("Admin Routing Module Loaded.");
    }
}