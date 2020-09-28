import { TestBed } from '@angular/core/testing';

import { TwitterSearchClientService } from './twitter-search-client.service';

describe('TwitterSearchClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwitterSearchClientService = TestBed.get(TwitterSearchClientService);
    expect(service).toBeTruthy();
  });
});
