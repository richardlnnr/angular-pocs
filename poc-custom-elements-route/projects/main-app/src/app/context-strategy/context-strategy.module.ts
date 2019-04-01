import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextStrategyComponent } from './context-strategy.component';
import { ContextStrategyRoutingModule } from './context-strategy-routing.module';

@NgModule({
  declarations: [
    ContextStrategyComponent
  ],
  imports: [
    CommonModule,
    ContextStrategyRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ContextStrategyModule { }
