import { TestBed } from '@angular/core/testing';

import { CustomElementLoaderService } from './custom-element-loader.service';

describe('CustomElementLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomElementLoaderService = TestBed.get(CustomElementLoaderService);
    expect(service).toBeTruthy();
  });
});
