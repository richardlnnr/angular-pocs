import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomAppAComponent } from './custom-app-a/custom-app-a.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

const routes: Routes = [
  { path: 'custom-app-a', component: CustomAppAComponent },
  { path: 'dashboard', component: MainDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
