import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import { AddLatestNewsComponent } from './add-latest-news/add-latest-news.component';
import { AddNewsCanActivateGuard } from './addnews-can-activate-guard';

const adminRoutes: Routes=[
    {path:'',component:AdminLoginComponent},
    {path:'addnews',component:AddLatestNewsComponent,canActivate: [AddNewsCanActivateGuard],}
  
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