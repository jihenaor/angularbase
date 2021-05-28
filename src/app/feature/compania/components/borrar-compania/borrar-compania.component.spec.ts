import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BorrarCompaniaComponent } from './borrar-compania.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CompaniaService } from '../../shared/service/compania.service';
import { HttpService } from 'src/app/core/services/http.service';
import { Compania } from '@compania/shared/model/compania';


describe('BorrarCompaniaComponent', () => {
  let component: BorrarCompaniaComponent;
  let fixture: ComponentFixture<BorrarCompaniaComponent>;
  let companiaService: CompaniaService;


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
    //    companiaService = fixture.debugElement.injector.get(CompaniaService);
    companiaService = TestBed.inject(CompaniaService);
    const spy = spyOn(companiaService, 'consultar').and.callFake( () => null);
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
  it('Borrando compania', () => {
    let lengthInicial;
    let lengthFinal;
    const compania = new Compania('1', 'NI', '891480000', 'SERVI1', 1);
    const companias = [
      new Compania('1', 'NI', '891480000', 'SERVI1', 1),
      new Compania('2', 'NI', '891480001', 'SERVI2', 1),
      new Compania('3', 'NI', '891480002', 'SERVI3', 1),
      new Compania('4', 'NI', '891480003', 'SERVI4', 1),
    ];
    const obsof2 = of(companias);
    component.listaCompanias = obsof2;

    component.listaCompanias.subscribe(result => {
      lengthInicial = result.length;
    });

    expect(lengthInicial).toBe(4);

    component.onEliminar(compania);

    component.listaCompanias.subscribe(result => {
      lengthFinal = result.length;
    });
    expect(lengthFinal === 3).toBeTrue();
    expect(component.msg).toBe('Eliminado exitoso');
  });
});
