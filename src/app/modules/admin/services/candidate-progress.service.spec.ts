import { TestBed, inject } from '@angular/core/testing';

import { CandidateProgressService } from './candidate-progress.service';

describe('CandidateProgressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidateProgressService]
    });
  });

  it('should be created', inject([CandidateProgressService], (service: CandidateProgressService) => {
    expect(service).toBeTruthy();
  }));
});
