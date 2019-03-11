import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';

const routes: Routes = [
  { path: ':id', redirectTo: ':id/list', pathMatch: 'full' },
  { path: ':id/list', component: PeopleListComponent },
  { path: ':id/dashboard', component: PeopleDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
