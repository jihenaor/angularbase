import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarNominaComponent } from './listar-nomina.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NominaService } from '../../shared/service/nomina.service';
import { HttpService } from 'src/app/core/services/http.service';
import { NominaBuilder } from './nominaBuilder';

describe('ListarNominaComponent', () => {
  let component: ListarNominaComponent;
  let fixture: ComponentFixture<ListarNominaComponent>;
  let nominaService: NominaService;
  const listaNominas = new NominaBuilder().build();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarNominaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [NominaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNominaComponent);
    component = fixture.componentInstance;
    nominaService = TestBed.inject(NominaService);
    spyOn(nominaService, 'consultar').and.returnValue(
      of(listaNominas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    component.listaNominas.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });
});
