import { CompaniaService } from './compania.service';

import { CompaniaBuilder } from './companiaBuilder';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CompaniaService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let companiaService: CompaniaService;
  let httpMock: HttpTestingController;

  const apiEndpointCompanias = `${environment.endpoint}/companias`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompaniaService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    companiaService = new CompaniaService(httpClientSpy as any);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  /*
  it('should be created', () => {
    const companiaService: CompaniaService = TestBed.inject(CompaniaService);
    expect(companiaService).toBeDefined();
  });
*/
  it('deberia listar companias', () => {
    const listaCompanias = new CompaniaBuilder().build();

    httpClientSpy.get.and.returnValue(of(listaCompanias));

    companiaService.consultar().subscribe(
      companias => expect(companias).toEqual(listaCompanias, ' compañias esperadas'),
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

    companiaService.consultar().pipe(
      catchError(error => {
          expect(error).toBe(errorResponse);
          return of([]);
      })
    );
  });


  it('deberia crear un compania', () => {
    const dummyCompania = new CompaniaBuilder().build()[0];
    const s: CompaniaService = TestBed.inject(CompaniaService);

    s.guardar(dummyCompania).subscribe({
      next: data => {
          expect(data.id !== undefined).toEqual(true);
      }
    });
    const req = httpMock.expectOne(apiEndpointCompanias);

    expect(req.request.method).toBe('POST');
    // req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar una compania', () => {
    const dummyCompania = new CompaniaBuilder().build()[0];
    const s: CompaniaService = TestBed.inject(CompaniaService);

    s.eliminar(dummyCompania).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });

    const req = httpMock.expectOne(`${apiEndpointCompanias}/1`);

    expect(req.request.method).toBe('DELETE');
    // req.event(new HttpResponse<boolean>({body: true}));
  });
});
