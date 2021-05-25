import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CompaniaService } from './compania.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Compania } from '../model/compania';
import { HttpResponse } from '@angular/common/http';

describe('CompaniaService', () => {
  let httpMock: HttpTestingController;
  let service: CompaniaService;
  const apiEndpointCompaniaConsulta = `${environment.endpoint}/companias`;
  const apiEndpointCompanias = `${environment.endpoint}/companias`;

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


  it('deberia listar companias', () => {
    const dummyCompanias = [
      new Compania('1', 'NI', '891480001', 'COMFAMILIAR', 1), new Compania('2', 'NI', '816001609', 'SERVICIUDAD', 1)
    ];
    service.consultar().subscribe(companias => {
      expect(companias.length).toBe(2);
      expect(companias).toEqual(dummyCompanias);
    });
    const req = httpMock.expectOne(apiEndpointCompaniaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCompanias);
  });

  it('deberia crear un compania', () => {
    const dummyCompania = new Compania('1', 'NI', '891480001', 'COMFAMILIAR', 1);
    service.guardar(dummyCompania).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointCompanias);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un compania', () => {
    const dummyCompania = new Compania('1', 'NI', '891480001', 'COMFAMILIAR', 1);
    service.eliminar(dummyCompania).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointCompanias}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
