import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CompaniaService } from './nomina.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Nomina } from '../model/nomina';
import { HttpResponse } from '@angular/common/http';

describe('CompaniaService', () => {
  let httpMock: HttpTestingController;
  let service: CompaniaService;
  const apiEndpointCompaniaConsulta = `${environment.endpoint}/nominas`;
  const apiEndpointCompanias = `${environment.endpoint}/nominas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompaniaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CompaniaService);
  });

  it('should be created', () => {
    const productService: CompaniaService = TestBed.inject(CompaniaService);
    expect(productService).toBeTruthy();
  });


  it('deberia listar nominas', () => {
    const dummyCompanias = [
      new Nomina('1', 'NI', '891480001', 'COMFAMILIAR', 1), new Nomina('2', 'NI', '816001609', 'SERVICIUDAD', 1)
    ];
    service.consultar().subscribe(nominas => {
      expect(nominas.length).toBe(2);
      expect(nominas).toEqual(dummyCompanias);
    });
    const req = httpMock.expectOne(apiEndpointCompaniaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCompanias);
  });

  it('deberia crear un nomina', () => {
    const dummyCompania = new Nomina('1', 'NI', '891480001', 'COMFAMILIAR', 1);
    service.guardar(dummyCompania).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointCompanias);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un nomina', () => {
    const dummyCompania = new Nomina('1', 'NI', '891480001', 'COMFAMILIAR', 1);
    service.eliminar(dummyCompania).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointCompanias}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
