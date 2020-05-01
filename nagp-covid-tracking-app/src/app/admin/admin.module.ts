// This is login feature module.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryLoginDataService } from '../core/services/user-detail-in-memory-data.service';
import { AdminRoutingModule } from './admin-routing.module';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryLoginDataService, { dataEncapsulation: false }
    ),
    SharedMaterialModule,
    AdminRoutingModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    SharedMaterialModule,
    AdminRoutingModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class AdminModule {
    constructor() {
      console.log("Admin Module loaded.");
    }
 }
