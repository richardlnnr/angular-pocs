import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

const routes: Routes = [
  { path: ':id', redirectTo: ':id/list', pathMatch: 'full' },
  { path: ':id/list', component: PeopleListComponent },
  { path: ':id/list/:personId', component: PeopleDetailComponent },
  { path: ':id/dashboard', component: PeopleDashboardComponent },
  { path: ':id/dashboard/:personId', component: PeopleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
