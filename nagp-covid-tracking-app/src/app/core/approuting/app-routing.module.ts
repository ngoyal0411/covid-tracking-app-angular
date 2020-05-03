import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule) },
  {path:'admin', loadChildren: () => import('../../admin/admin.module').then(m => m.AdminModule)},
  {path: '**', loadChildren: () => import('../../shared/pagenotfound/pagenotfound.module').then(m => m.PageNotFoundModule), pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log("App routing module loaded.")
  }
 }
