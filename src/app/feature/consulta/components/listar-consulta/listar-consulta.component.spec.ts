import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { ListarConsultaComponent } from './listar-consulta.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ConsultaService } from '../../shared/service/consulta.service';
import { ConsultaBuilder } from './consultaBuilder';

describe('ListarConsultaComponent', () => {
  let component: ListarConsultaComponent;
  let fixture: ComponentFixture<ListarConsultaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarConsultaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ConsultaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ListarConsultaComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();

    let consultaService = TestBed.inject(ConsultaService);
    const listaConsultas = new ConsultaBuilder().build();

    const myService = spyOn(consultaService, 'consultar').and.returnValue(
      of(listaConsultas)
    );

    component.listaConsultas.subscribe(resultado => {
      expect(2).toBe(resultado.length);

      myService.calls.reset();
    });
  });

  it('should error', () => {
    let s: ConsultaService;

    s = TestBed.inject(ConsultaService);

    let myService = spyOn(s, 'consultar').and.returnValue(throwError('Error'));

    s.consultar().subscribe(() => {
      fail( 'handleError: expected error..' );
    }, ( error ) => {
			expect( error ).toEqual( 'Error' );

      myService.calls.reset();
		});
  });
});
