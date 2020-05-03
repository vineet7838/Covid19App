import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardModule} from '../../dashboard/dashboard.module';
import { dashboardRoutes } from '../../dashboard/dashboard-routing.module';

import { DashboardComponent } from 'src/app/dashboard/dashboard/dashboard.component';
import { AdminLoginComponent } from 'src/app/admin-login/admin-login.component';
import { DashboardCanActivateGuard } from 'src/app/dashboard/dashboard-can-activate-guard';
import { PrecautionsComponent } from 'src/app/dashboard/precautions/precautions.component';
import { AddpostComponent } from 'src/app/dashboard/addpost/addpost.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';
import { ToastrModule } from 'ngx-toastr';


export const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'login', component: AdminLoginComponent},
  {path:'dashboard', component: DashboardComponent, children: [...dashboardRoutes]},
  {path:'dashboard/addpost',component:AddpostComponent, canActivate: [DashboardCanActivateGuard]},
  {path: '**', component: PagenotfoundComponent, pathMatch: 'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
          
            DashboardModule
  ],
  exports: [RouterModule,
            
            DashboardModule
  ]
})
export class AppRoutingModule {
  constructor() {
    console.log("App routing module loaded.")
  }
 }
