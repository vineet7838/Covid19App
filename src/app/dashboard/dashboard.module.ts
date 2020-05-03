// This is dashboard feature module.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { StatsComponent } from './stats/stats.component';
import { AddpostComponent } from './addpost/addpost.component';
import { DashboardCanActivateGuard } from './dashboard-can-activate-guard';
import { StatsDetailComponent } from './stats-detail/stats-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [DashboardComponent, NewsComponent,PrecautionsComponent, StatsComponent, AddpostComponent, StatsDetailComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,NgbModule
  ],
  exports: [
    DashboardComponent,DashBoardRoutingModule
    , NewsComponent,PrecautionsComponent,StatsComponent,AddpostComponent
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
