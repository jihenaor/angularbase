import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BorrarCompaniaComponent } from './borrar-nomina.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CompaniaService } from '../../shared/service/nomina.service';
import { HttpService } from 'src/app/core/services/http.service';
import { Nomina } from '@nomina/shared/model/nomina';


describe('BorrarCompaniaComponent', () => {
  let component: BorrarCompaniaComponent;
  let fixture: ComponentFixture<BorrarCompaniaComponent>;
  let nominaService: CompaniaService;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarCompaniaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CompaniaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarCompaniaComponent);
    component = fixture.componentInstance;
    //    nominaService = fixture.debugElement.injector.get(CompaniaService);
    nominaService = TestBed.inject(CompaniaService);
    const spy = spyOn(nominaService, 'consultar').and.callFake( () => null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('consulta Companias fue realizada', () => {


  });
*/
  it('Borrando nomina', () => {
    let lengthInicial;
    let lengthFinal;
    const nomina = new Nomina('1', 'NI', '891480000', 'SERVI1', 1);
    const nominas = [
      new Nomina('1', 'NI', '891480000', 'SERVI1', 1),
      new Nomina('2', 'NI', '891480001', 'SERVI2', 1),
      new Nomina('3', 'NI', '891480002', 'SERVI3', 1),
      new Nomina('4', 'NI', '891480003', 'SERVI4', 1),
    ];
    const obsof2 = of(nominas);
    component.listaCompanias = obsof2;

    component.listaCompanias.subscribe(result => {
      lengthInicial = result.length;
    });

    expect(lengthInicial).toBe(4);

    component.onEliminar(nomina);

    component.listaCompanias.subscribe(result => {
      lengthFinal = result.length;
    });
    expect(lengthFinal === 3).toBeTrue();
    expect(component.msg).toBe('Eliminado exitoso');
  });
});
