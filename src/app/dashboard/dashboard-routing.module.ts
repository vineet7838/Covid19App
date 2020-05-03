import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { SharedMaterialModule } from '../shared/shared-material.module';



import { PrecautionsComponent } from './precautions/precautions.component';
import { NewsComponent } from './news/news.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { DashboardCanActivateGuard } from './dashboard-can-activate-guard';
import { StatsDetailComponent } from './stats-detail/stats-detail.component';

export const dashboardRoutes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'precautions', component: PrecautionsComponent },
  {path:'stats/:id',component:StatsDetailComponent},
  {path: 'stats', component: StatsComponent},
  {path: '', component: StatsComponent}
];

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class DashBoardRoutingModule { }
