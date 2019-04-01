import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasehrefStrategyComponent } from './basehref-strategy.component';

describe('BasehrefStrategyComponent', () => {
  let component: BasehrefStrategyComponent;
  let fixture: ComponentFixture<BasehrefStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasehrefStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasehrefStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
