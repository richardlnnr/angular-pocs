import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import {
  MatGridListModule, MatCardModule, MatMenuModule, MatIconModule,
  MatButtonModule, MatTabsModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';

import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PeopleServiceService } from './people-service.service';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleDashboardComponent,
    PeopleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [
    PeopleServiceService,
    { provide: APP_BASE_HREF, useValue: getBaseLocation('') },
  ],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('ngx-basehref-strategy', customElement);
  }

  ngDoBootstrap() {}
 }

export function getBaseLocation(defaultRoute: string) {
  const paths: string[] = location.pathname.split('/').splice(1, 1);
  const basePath: string = (paths && paths[0]) || defaultRoute;
  return '/' + basePath;
}
