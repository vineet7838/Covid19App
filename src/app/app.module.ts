import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalHeaderComponent } from './shared/portal-header/portal-header.component';
import { PortalFooterComponent } from './shared/portal-footer/portal-footer.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';


import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './core/approuting/app-routing.module';
import { SharedMaterialModule } from './shared/shared-material.module';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryNewsDataService } from './core/services/news-in-memory-data.service';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,AppRoutingModule,SharedMaterialModule,HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryNewsDataService, {
      passThruUnknownUrl: true}),
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
