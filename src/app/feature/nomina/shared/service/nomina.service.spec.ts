import { NominaService } from './nomina.service';

import { NominaBuilder } from './nominaBuilder';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NominaService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let nominaService: NominaService;
  let httpMock: HttpTestingController;

  const apiEndpointNominas = `${environment.endpoint}/nominas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NominaService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    nominaService = new NominaService(httpClientSpy as any);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    const nominaService: NominaService = TestBed.inject(NominaService);

    expect(nominaService).toBeTruthy();
  });

  it('deberia listar nominas', () => {
    const listaNominas = new NominaBuilder().build();

    httpClientSpy.get.and.returnValue(of(listaNominas));

    nominaService.consultar().subscribe(
      nominas => expect(nominas).toEqual(listaNominas, ' compañias esperadas'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'llamado una vez');
  });

  it('deberia capturar exception al listar las compañias', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'});

    httpClientSpy.get.and.returnValue(throwError(errorResponse));

    nominaService.consultar().pipe(
      catchError(error => {
          expect(error).toBe(errorResponse);
          return of([]);
      })
    );
  });


  it('deberia crear un nomina', () => {
    const dummyNomina = new NominaBuilder().build()[0];
    const s: NominaService = TestBed.inject(NominaService);

    s.guardar(dummyNomina).subscribe({
      next: data => {
          expect(data.id !== undefined).toEqual(true);
      }
    });
    const req = httpMock.expectOne(apiEndpointNominas);

    expect(req.request.method).toBe('POST');
    httpMock.verify();
    // req.event(new HttpResponse<boolean>({body: true}));
  });
});
