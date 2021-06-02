import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { ListarNominaComponent } from './listar-nomina.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NominaService } from '../../shared/service/nomina.service';
import { NominaBuilder } from './nominaBuilder';

describe('ListarNominaComponent', () => {
  let component: ListarNominaComponent;
  let fixture: ComponentFixture<ListarNominaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarNominaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [NominaService]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ListarNominaComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });
  
  xit('should create', () => {
    expect(component).toBeTruthy();

    let nominaService= TestBed.inject(NominaService);
    const listaNominas = new NominaBuilder().build();

    let myService = spyOn(nominaService, 'consultar').and.returnValue(
      of(listaNominas)
    );

    component.listaNominas.subscribe(resultado => {
      expect(2).toBe(resultado.length);

      myService.calls.reset();
    });


  });

  it('should error', () => {
    let s: NominaService;

    s = TestBed.inject(NominaService);

    let myService = spyOn(s, 'consultar').and.returnValue(throwError('Error'));

    s.consultar().subscribe(() => {
      fail( 'handleError: expected error..' );
    }, ( error ) => {
			expect( error ).toEqual( 'Error' );

      myService.calls.reset();
		});
  });
});
