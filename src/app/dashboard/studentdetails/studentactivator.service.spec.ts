import { TestBed, inject } from '@angular/core/testing';

import { StudentactivatorService } from './studentactivator.service';

describe('StudentactivatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentactivatorService]
    });
  });

  it('should be created', inject([StudentactivatorService], (service: StudentactivatorService) => {
    expect(service).toBeTruthy();
  }));
});
