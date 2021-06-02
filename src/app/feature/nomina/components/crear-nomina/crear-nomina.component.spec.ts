import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearNominaComponent } from './crear-nomina.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NominaService } from '../../shared/service/nomina.service';
import { CompaniaService } from '@compania/shared/service/compania.service';


describe('CrearNominaComponent', () => {
  let component: CrearNominaComponent;
  let fixture: ComponentFixture<CrearNominaComponent>;  // Se usa para extraer las dependencias del componente
  let companiaService: NominaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearNominaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [NominaService, CompaniaService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNominaComponent);    // Instancia el componente ngOnInit
    component = fixture.componentInstance;

    companiaService = TestBed.inject(NominaService);

    spyOn(companiaService, 'guardar').and.returnValue(
      of({value: 1})
    );

    fixture.detectChanges();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.nominaForm.valid).toBeFalsy();
    component.cerar();
    expect(component.msg).toBe('Los datos digitados no son validos');
  });

  it('Registrando nomina', () => {
    expect(component.nominaForm.valid).toBeFalsy();
    component.nominaForm.controls.id.setValue('001');
    component.nominaForm.controls.documentoempleado.setValue('123456789');
    component.nominaForm.controls.periodo.setValue('202001');
    component.nominaForm.controls.valor.setValue('2000');
    component.nominaForm.controls.companiaid.setValue('1');
    expect(component.nominaForm.valid).toBeTruthy();

    component.cerar();

    expect(companiaService.guardar).toHaveBeenCalledTimes(1);
    expect(component.msg).toBe('Registro exitoso');
  });

  it('deberia inicializarse la variable msg', () => {
    component.changeDocumentoempleado();
    expect(component.msg).toBe('');
  });
});


