import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { ListarCompaniaComponent } from './listar-compania.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CompaniaService } from '../../shared/service/compania.service';
import { CompaniaBuilder } from './companiaBuilder';

describe('ListarCompaniaComponent', () => {
  let component: ListarCompaniaComponent;
  let fixture: ComponentFixture<ListarCompaniaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCompaniaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [CompaniaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ListarCompaniaComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
  
  xit('should create', () => {
    expect(component).toBeTruthy();

    let companiaService= TestBed.inject(CompaniaService);
    const listaCompanias = new CompaniaBuilder().build();

    let myService = spyOn(companiaService, 'consultar').and.returnValue(
      of(listaCompanias)
    );

    component.listaCompanias.subscribe(resultado => {
      expect(2).toBe(resultado.length);

      myService.calls.reset();
    });


  });

  it('should error', () => {
    let s: CompaniaService;

    s = TestBed.inject(CompaniaService);

    let myService = spyOn(s, 'consultar').and.returnValue(throwError('Error'));

    s.consultar().subscribe(() => {
      fail( 'handleError: expected error..' );
    }, ( error ) => {
			expect( error ).toEqual( 'Error' );

      myService.calls.reset();
		});
  });
});
