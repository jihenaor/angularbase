import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';

import { CrearNominaComponent } from './crear-nomina.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NominaService } from '../../shared/service/nomina.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearNominaComponent', () => {
  let component: CrearNominaComponent;
  let fixture: ComponentFixture<CrearNominaComponent>;  // Se usa para extraer las dependencias del componente
  let nominaService: NominaService;

  // beforeEach antes de cada test
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
      providers: [NominaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNominaComponent);    // Instancia el componente ngOnInit
    component = fixture.componentInstance;
    nominaService = TestBed.inject(NominaService);

    // SpyOn: característica de Jasmine, permite interceptar dinámicamente las
    // Llamadas a una función y cambiar su resultado. 

//    spyOn(nominaService, 'guardar').and.returnValue(
//      of(true)
//    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.nominaForm.valid).toBeFalsy();
  });

  it('Registrando nomina', () => {

    expect(component.nominaForm.valid).toBeFalsy();
    component.nominaForm.controls.id.setValue('001');
    component.nominaForm.controls.tipodocumento.setValue('NI');
    component.nominaForm.controls.numerodocumento.setValue('891480000');
    component.nominaForm.controls.razonsocial.setValue('EMPRESA 1');
    component.nominaForm.controls.analistaid.setValue('1');
    expect(component.nominaForm.valid).toBeTruthy();
//    spyOn(nominaService,'guardar');
    component.cerar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
    expect(nominaService.guardar).toHaveBeenCalledTimes(1);
    // expect(component.msg).toBe('Registro exitoso');
    //const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('h3').textContent).toContain('Registro exitoso');
  });
});
