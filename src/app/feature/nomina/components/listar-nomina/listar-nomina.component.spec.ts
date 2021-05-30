import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarCompaniaComponent } from './listar-nomina.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CompaniaService } from '../../shared/service/nomina.service';
import { HttpService } from 'src/app/core/services/http.service';
import { CompaniaBuilder } from './nominaBuilder';

describe('ListarCompaniaComponent', () => {
  let component: ListarCompaniaComponent;
  let fixture: ComponentFixture<ListarCompaniaComponent>;
  let nominaService: CompaniaService;
  const listaCompanias = new CompaniaBuilder().build();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCompaniaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CompaniaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCompaniaComponent);
    component = fixture.componentInstance;
    nominaService = TestBed.inject(CompaniaService);
    spyOn(nominaService, 'consultar').and.returnValue(
      of(listaCompanias)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

AAA


    component.listaCompanias.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });
});
