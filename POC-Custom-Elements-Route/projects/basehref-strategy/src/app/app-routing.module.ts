import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PeopleListComponent },
  { path: 'list/:personId', component: PeopleDetailComponent },
  { path: 'dashboard', component: PeopleDashboardComponent },
  { path: 'dashboard/:personId', component: PeopleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
