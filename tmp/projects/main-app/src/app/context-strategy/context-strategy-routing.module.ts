import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextStrategyComponent } from './context-strategy.component';

const routes: Routes = [
  {
    path: '',
    component: ContextStrategyComponent,
    children: [
      {
        path: '**',
        component: ContextStrategyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContextStrategyRoutingModule { }
