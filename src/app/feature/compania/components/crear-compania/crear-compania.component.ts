import { Component, OnInit } from '@angular/core';
import { CompaniaService } from '../../shared/service/compania.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_NUMERO_DOCUMENTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_NUMERO_DOCUMENTO = 16;
const LONGITUD_MAXIMA_PERMITIDA_RAZON_SOCIAL = 80;


@Component({
  selector: 'app-crear-compania',
  templateUrl: './crear-compania.component.html',
  styleUrls: ['./crear-compania.component.css']
})
export class CrearCompaniaComponent implements OnInit {
  companiaForm: FormGroup;
  msg: string;
  id: string;
  analistas = [
    { id: '1', nombre: 'Analista 1'},
    { id: '2', nombre: 'Analista 2'},
    { id: '3', nombre: 'Analista 3'},
  ];

  tiposdocumento = [
    { id: 'NI', nombre: 'NIT'},
    { id: 'CC', nombre: 'Cédula de ciudadanía'},
  ];

  constructor(protected companiaServices: CompaniaService) { }

  ngOnInit() {
    this.construirFormularioCompania();
  }

  cerar() {
    if (!this.companiaForm.valid) {
      this.msg = 'Los datos digitados no son validos';
      return;
    }
    this.companiaServices.guardar(this.companiaForm.value).subscribe({
      next: data => {
          this.id = data.id;
          this.msg = 'Registro exitoso';
      },
      error: error => {
        this.msg = error;
      }
    });
  }

  changeNumerodocumento() {
    this.msg = '';
  }

  private construirFormularioCompania() {
    this.companiaForm = new FormGroup({
      id: new FormControl('1', [Validators.required]),
      tipodocumento: new FormControl('', [Validators.required]),
      numerodocumento: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_NUMERO_DOCUMENTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_NUMERO_DOCUMENTO)]),
      razonsocial: new FormControl('', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_RAZON_SOCIAL)]),
      analistaid: new FormControl(''),
    });
  }
}
