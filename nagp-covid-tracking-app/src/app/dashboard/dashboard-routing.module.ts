import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { StatesDetailComponent } from './states-detail/states-detail.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DistrictsDetailComponent } from './districts-detail/districts-detail.component';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../shared/shared-material.module';


const dashboardRoutes: Routes=[
    {path:'',component:DashboardComponent,children:[
      {path:'',redirectTo:'statelist',pathMatch:'full'},
      {path:'statelist',component:StatesDetailComponent},
      {path:'news',component:LatestNewsComponent},
      {path:'precautions',component:PrecautionsComponent},
      {path:'statelist/:district',component:DistrictsDetailComponent}
    ]
    },
  
    
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes),
        CommonModule,
        SharedMaterialModule
        ],
    exports: [RouterModule,SharedMaterialModule]
  })
  export class DashboardRoutingModule {
    constructor() {
      console.log("Dashboard Routing Module")
    }
   }