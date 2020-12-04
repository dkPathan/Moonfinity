import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module'

const routes: Routes = [
  { path: '', component: PageNotFoundComponent, pathMatch: 'full' }, // redirect to `first-component`
  { path: 'dashoboard', loadChildren: () =>  DashboardRoutingModule},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
