// This is a shared module that is used throughout the app.

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';

import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalFooterComponent } from './portal-footer/portal-footer.component';
import { PortalHeaderComponent } from './portal-header/portal-header.component';
import { ConvertToDisplayName } from './pipes/cover-to-display-name.pipe';
import { BrowserModule } from '@angular/platform-browser';


/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [PortalFooterComponent, PortalHeaderComponent, ConvertToDisplayName],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    ToastrModule.forRoot()
  ],
  exports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    ToastrModule,
    PortalHeaderComponent,
    PortalFooterComponent,
    ConvertToDisplayName
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class SharedMaterialModule{
  constructor() {
    console.log("Shared Material module loaded.");
  }
 
 }
