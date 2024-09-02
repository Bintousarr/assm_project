import { TestBed } from '@angular/core/testing';

import { SpeakerAvalabilityService } from './speaker-avalability.service';

describe('SpeakerAvalabilityService', () => {
  let service: SpeakerAvalabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeakerAvalabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
