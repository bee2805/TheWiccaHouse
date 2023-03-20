import { TestBed } from '@angular/core/testing';

import { InventorydbService } from './inventorydb.service';

describe('InventorydbService', () => {
  let service: InventorydbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventorydbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
