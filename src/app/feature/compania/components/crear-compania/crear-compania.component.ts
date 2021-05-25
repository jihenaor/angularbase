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
  constructor(protected companiaServices: CompaniaService) { }

  ngOnInit() {
    this.construirFormularioCompania();
  }

  cerar() {
    this.companiaServices.guardar(this.companiaForm.value);
  }

  private construirFormularioCompania() {
    this.companiaForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      tipodocumento: new FormControl('', [Validators.required]),
      numerodocumento: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_NUMERO_DOCUMENTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_NUMERO_DOCUMENTO)]),
      razonsocial: new FormControl('', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_RAZON_SOCIAL)]),
      analistaid: new FormControl(''),
    });
  }
}
