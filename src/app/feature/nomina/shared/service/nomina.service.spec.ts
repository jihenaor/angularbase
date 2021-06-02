import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NominaService } from './nomina.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Nomina } from '../model/nomina';
// import { HttpResponse } from '@angular/common/http';

describe('NominaService', () => {
  let httpMock: HttpTestingController;
  let service: NominaService;
  const apiEndpointNominaConsulta = `${environment.endpoint}/nominas`;
  // const apiEndpointNominas = `${environment.endpoint}/nominas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NominaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(NominaService);
  });

  it('should be created', () => {
    const productService: NominaService = TestBed.inject(NominaService);
    expect(productService).toBeTruthy();
  });


  it('deberia listar nominas', () => {
    const dummyNominas = [
      new Nomina('1', 'NI', '891480001', 'COMFAMILIAR', 1), new Nomina('2', 'NI', '816001609', 'SERVICIUDAD', 1)
    ];
    service.consultar().subscribe(nominas => {
      expect(nominas.length).toBe(2);
      expect(nominas).toEqual(dummyNominas);
    });
    const req = httpMock.expectOne(apiEndpointNominaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyNominas);
  });
/*
  it('deberia crear un nomina', () => {
//    const dummyNomina = new Nomina('1', 'NI', '891480001', 'COMFAMILIAR', 1);
//    service.guardar(dummyNomina).subscribe((respuesta) => {
//      expect(respuesta).toEqual(true);
//    });
    const req = httpMock.expectOne(apiEndpointNominas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
  */
});
