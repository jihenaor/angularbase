import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarCompaniaComponent } from './listar-compania.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CompaniaService } from '../../shared/service/compania.service';
import { Compania } from '../../shared/model/compania';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarCompaniaComponent', () => {
  let component: ListarCompaniaComponent;
  let fixture: ComponentFixture<ListarCompaniaComponent>;
  let companiaService: CompaniaService;
  const listaCompanias: Compania[] = [
                            new Compania('1', 'NI', '891480000', 'Compania 1', 1), 
                            new Compania('2', 'NI', '816001609', 'Compania 2', 1)
                          ];

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
    companiaService = TestBed.inject(CompaniaService);
    spyOn(companiaService, 'consultar').and.returnValue(
      of(listaCompanias)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaCompanias.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
