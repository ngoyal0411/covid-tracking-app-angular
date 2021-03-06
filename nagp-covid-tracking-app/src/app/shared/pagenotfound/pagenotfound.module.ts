import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import { SharedMaterialModule } from '../shared-material.module';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RouterModule.forChild([
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  exports: [
    PageNotFoundComponent,
    SharedMaterialModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class PageNotFoundModule { }
