import { TestBed, inject } from '@angular/core/testing';

import { QuestionCategoryService } from './question-category.service';

describe('QuestionCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionCategoryService]
    });
  });

  it('should be created', inject([QuestionCategoryService], (service: QuestionCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
