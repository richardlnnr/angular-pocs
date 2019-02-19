import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAppAComponent } from './custom-app-a.component';

describe('CustomAppAComponent', () => {
  let component: CustomAppAComponent;
  let fixture: ComponentFixture<CustomAppAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomAppAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomAppAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
