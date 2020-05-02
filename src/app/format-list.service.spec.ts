import { TestBed } from '@angular/core/testing';

import { FormatListService } from './format-list.service';

describe('FormatListService', () => {
  let service: FormatListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
