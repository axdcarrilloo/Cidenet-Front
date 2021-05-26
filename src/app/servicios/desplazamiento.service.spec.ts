import { TestBed } from '@angular/core/testing';

import { DesplazamientoService } from './desplazamiento.service';

describe('DesplazamientoService', () => {
  let service: DesplazamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesplazamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
