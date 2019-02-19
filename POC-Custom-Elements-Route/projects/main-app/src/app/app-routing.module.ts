import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomAppAComponent } from './custom-app-a/custom-app-a.component';

const routes: Routes = [
  { path: 'custom-app-a', component: CustomAppAComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
