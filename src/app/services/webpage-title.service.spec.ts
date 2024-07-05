import { TestBed } from '@angular/core/testing';

import { WebpageTitleService } from './webpage-title.service';

describe('WebpageTitleService', () => {
  let service: WebpageTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebpageTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
