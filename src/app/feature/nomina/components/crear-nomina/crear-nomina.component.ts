import { Component, OnInit } from '@angular/core';
import { CompaniaService } from '../../shared/service/nomina.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_NUMERO_DOCUMENTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_NUMERO_DOCUMENTO = 16;
const LONGITUD_MAXIMA_PERMITIDA_RAZON_SOCIAL = 80;


@Component({
  selector: 'app-crear-nomina',
  templateUrl: './crear-nomina.component.html',
  styleUrls: ['./crear-nomina.component.css']
})
export class CrearCompaniaComponent implements OnInit {
  nominaForm: FormGroup;
  errorMessage: string;
  id: string
  analistas=[
    { id: "1", nombre: "Analista 1"},
    { id: "2", nombre: "Analista 2"},
    { id: "3", nombre: "Analista 3"},
  ];

  tiposdocumento=[
    { id: "NI", nombre: "NIT"},
    { id: "CC", nombre: "Cédula de ciudadanía"},
  ];

  constructor(protected nominaServices: CompaniaService) { }

  ngOnInit() {
    this.construirFormularioCompania();
  }

  cerar() {
    if (!this.nominaForm.valid) {
      this.errorMessage = 'Los datos digitados no son validos';
      return;
    }
    this.nominaServices.guardar(this.nominaForm.value).subscribe({
      next: data => {
          this.id = data.id;
          this.errorMessage = 'Registro exitoso';
      },
      error: error => {
        this.errorMessage = error;
      }
    });
  }

  changeNumerodocumento() {
    this.errorMessage = '';
  }

  private construirFormularioCompania() {
    this.nominaForm = new FormGroup({
      id: new FormControl('1', [Validators.required]),
      tipodocumento: new FormControl('', [Validators.required]),
      numerodocumento: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_NUMERO_DOCUMENTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_NUMERO_DOCUMENTO)]),
      razonsocial: new FormControl('', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_RAZON_SOCIAL)]),
      analistaid: new FormControl(''),
    });
  }
}