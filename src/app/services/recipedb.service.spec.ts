import { TestBed } from '@angular/core/testing';

import { RecipedbService } from './recipedb.service';

describe('RecipedbService', () => {
  let service: RecipedbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipedbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
