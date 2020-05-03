// This is dashboard feature module.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StatesDetailComponent } from './states-detail/states-detail.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DistrictsDetailComponent } from './districts-detail/districts-detail.component';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [DashboardComponent,StatesDetailComponent,LatestNewsComponent,PrecautionsComponent,DistrictsDetailComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
   
  ],
  exports: [
    DashboardComponent,
    DashboardRoutingModule, 
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class DashboardModule {
  constructor() {
    console.log("Dashboard Module loaded.");
  }
 }
