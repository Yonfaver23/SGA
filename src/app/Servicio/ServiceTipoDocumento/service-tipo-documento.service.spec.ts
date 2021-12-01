import { TestBed } from '@angular/core/testing';

import { ServiceTipoDocumentoService } from './service-tipo-documento.service';

describe('ServiceTipoDocumentoService', () => {
  let service: ServiceTipoDocumentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTipoDocumentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
