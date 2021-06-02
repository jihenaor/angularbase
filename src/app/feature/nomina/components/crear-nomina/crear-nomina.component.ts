import { Component, OnInit } from '@angular/core';
import { NominaService } from '../../shared/service/nomina.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Compania } from '@compania/shared/model/compania';
import { CompaniaService } from '@compania/shared/service/compania.service';

const LONGITUD_MINIMA_PERMITIDA_NUMERO_DOCUMENTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_NUMERO_DOCUMENTO = 16;
const LONGITUD_PERIODO = 6;

@Component({
  selector: 'app-crear-nomina',
  templateUrl: './crear-nomina.component.html',
  styleUrls: ['./crear-nomina.component.css']
})
export class CrearNominaComponent implements OnInit {
  nominaForm: FormGroup;
  msg: string;
  id: string;
  public listaCompanias: Observable<Compania[]>;
    constructor(protected nominaServices: NominaService, protected companiaService: CompaniaService) { }

  ngOnInit() {
    this.construirFormularioNomina();
    this.consultarCompanias();
  }

  consultarCompanias() {
    this.listaCompanias = this.companiaService.consultar().pipe(
      catchError(error => {
          this.msg = error;
          return of([]);
      })
    );
  }

  cerar() {
    if (!this.nominaForm.valid) {
      this.msg = 'Los datos digitados no son validos';
      return;
    }
    this.nominaServices.guardar(this.nominaForm.value).subscribe({
      next: data => {
          this.id = data.id;
          this.msg = 'Registro exitoso';
      },
      error: error => {
        this.msg = error;
      }
    });
  }

  changeDocumentoempleado() {
    this.msg = '';
  }

  private construirFormularioNomina() {
    this.nominaForm = new FormGroup({
      id: new FormControl('1', [Validators.required]),
      documentoempleado: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_NUMERO_DOCUMENTO),
                              Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_NUMERO_DOCUMENTO)]),
      periodo: new FormControl('', [Validators.required, Validators.maxLength(LONGITUD_PERIODO)]),
      valor: new FormControl('', [Validators.required]),
      companiaid: new FormControl('1'),
    });
  }
}
