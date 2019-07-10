import { TestBed } from '@angular/core/testing';

import { ScrollingListServiceService } from './scrolling-list-service.service';

describe('ScrollingListServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollingListServiceService = TestBed.get(ScrollingListServiceService);
    expect(service).toBeTruthy();
  });
});
