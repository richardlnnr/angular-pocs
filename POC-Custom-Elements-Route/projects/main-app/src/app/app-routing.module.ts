import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ContextStrategyComponent } from './context-strategy/context-strategy.component';
import { BasehrefStrategyComponent } from './basehref-strategy/basehref-strategy.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'context-strategy',
    component: ContextStrategyComponent,
    children: [
      {
        path: '**',
        component: ContextStrategyComponent
      }
    ]
  },
  {
    path: 'basehref-strategy',
    component: BasehrefStrategyComponent,
    children: [
      {
        path: '**',
        component: BasehrefStrategyComponent
      }
    ]
  },
  { path: 'dashboard', component: MainDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
