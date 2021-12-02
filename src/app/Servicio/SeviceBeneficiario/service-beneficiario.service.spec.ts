import { TestBed } from '@angular/core/testing';

import { ServiceBeneficiarioService } from './service-beneficiario.service';

describe('ServiceBeneficiarioService', () => {
  let service: ServiceBeneficiarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBeneficiarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
