import { TestBed, inject } from '@angular/core/testing';

import { SiteDataService } from './site-data.service';

describe('SiteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiteDataService]
    });
  });

  it('should be created', inject([SiteDataService], (service: SiteDataService) => {
    expect(service).toBeTruthy();
  }));
});
