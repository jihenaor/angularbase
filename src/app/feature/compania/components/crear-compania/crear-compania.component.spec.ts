import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearCompaniaComponent } from './crear-compania.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CompaniaService } from '../../shared/service/compania.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearCompaniaComponent', () => {
  let component: CrearCompaniaComponent;
  let fixture: ComponentFixture<CrearCompaniaComponent>;  // Se usa para extraer las dependencias del componente
  let companiaService: CompaniaService;

  // beforeEach antes de cada test
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
      providers: [CompaniaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCompaniaComponent);    // Instancia el componente ngOnInit
    component = fixture.componentInstance;
    companiaService = TestBed.inject(CompaniaService);

    // SpyOn: característica de Jasmine, permite interceptar dinámicamente las
    // Llamadas a una función y cambiar su resultado. 

    spyOn(companiaService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.companiaForm.valid).toBeFalsy();
  });

  it('Registrando compania', () => {

    expect(component.companiaForm.valid).toBeFalsy();
    component.companiaForm.controls.id.setValue('001');
    component.companiaForm.controls.tipodocumento.setValue('NI');
    component.companiaForm.controls.numerodocumento.setValue('891480000');
    component.companiaForm.controls.razonsocial.setValue('EMPRESA 1');
    component.companiaForm.controls.analistaid.setValue('1');
    expect(component.companiaForm.valid).toBeTruthy();
//    spyOn(companiaService,'guardar');
    component.cerar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
    expect(companiaService.guardar).toHaveBeenCalledTimes(1);
    expect(component.msg).toBe('Registro exitoso');
    //const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('h3').textContent).toContain('Registro exitoso');
  });
});
