import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextStrategyComponent } from './context-strategy.component';

describe('ContextStrategyComponent', () => {
  let component: ContextStrategyComponent;
  let fixture: ComponentFixture<ContextStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
