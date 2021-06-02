import { ConsultaService } from './consulta.service';

import { ConsultaBuilder } from './consultaBuilder';
import { of } from 'rxjs';

describe('ConsultaService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let consultaService: ConsultaService;


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    consultaService = new ConsultaService(httpClientSpy as any);
  });

  it('deberia listar consultas', () => {
    const listaConsultas = new ConsultaBuilder().build();

    httpClientSpy.get.and.returnValue(of(listaConsultas));

    consultaService.consultar().subscribe(
      consultas => expect(consultas).toEqual(listaConsultas, ' Consulta esperadas'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'llamado una vez');
  });
});
