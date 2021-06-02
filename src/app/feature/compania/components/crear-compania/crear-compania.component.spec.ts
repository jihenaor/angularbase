import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearCompaniaComponent } from './crear-compania.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompaniaService } from '@compania/shared/service/compania.service';

describe('CrearCompaniaComponent', () => {
  let component: CrearCompaniaComponent;
  let fixture: ComponentFixture<CrearCompaniaComponent>;  // Se usa para extraer las dependencias del componente
  let companiaService: CompaniaService;
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCompaniaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [CompaniaService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCompaniaComponent);    // Instancia el componente ngOnInit
    component = fixture.componentInstance;

    companiaService = TestBed.inject(CompaniaService);

    spyOn(companiaService, 'guardar').and.returnValue(
      of({value: 1})
    );

    fixture.detectChanges();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.companiaForm.valid).toBeFalsy();
    component.cerar();
    expect(component.msg).toBe('Los datos digitados no son validos');
  });

  it('Registrando compania', () => {
    expect(component.companiaForm.valid).toBeFalsy();
    component.companiaForm.controls.id.setValue('001');
    component.companiaForm.controls.tipodocumento.setValue('NI');
    component.companiaForm.controls.numerodocumento.setValue('891480000');
    component.companiaForm.controls.razonsocial.setValue('EMPRESA 1');
    component.companiaForm.controls.analistaid.setValue('1');
    expect(component.companiaForm.valid).toBeTruthy();

    component.cerar();

    expect(companiaService.guardar).toHaveBeenCalledTimes(1);
    expect(component.msg).toBe('Registro exitoso');
  });

  it('deberia inicializarse la variable msg', () => {
    component.changeNumerodocumento();
    expect(component.msg).toBe('');
  });
});
