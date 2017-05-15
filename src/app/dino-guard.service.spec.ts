import { TestBed, inject } from '@angular/core/testing';
import { DinoGuardService } from './dino-guard.service';

describe('DinoGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinoGuardService]
    });
  });

  it('should ...', inject([DinoGuardService], (service: DinoGuardService) => {
    expect(service).toBeTruthy();
  }));
});
