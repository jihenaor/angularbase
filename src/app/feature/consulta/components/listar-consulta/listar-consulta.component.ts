import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Consulta } from '@consulta/shared/model/consulta';
import { ConsultaService } from '../../shared/service/consulta.service';

@Component({
  selector: 'app-listar-consulta',
  templateUrl: './listar-consulta.component.html',
  styleUrls: ['./listar-consulta.component.css']
})
export class ListarConsultaComponent implements OnInit {
  public listaConsultas: Observable<Consulta[]>;
//  private consulta: Consulta;
  errorMsg: string;

// constructor(private modalService: NgbModal, protected consultaService: ConsultaService) { }
  constructor(protected consultaService: ConsultaService) { }

  ngOnInit() {

      this.listaConsultas = this.consultaService.consultar().pipe(
        catchError(error => {
            this.errorMsg = error;
            return of([]);
        })
    );
  }
/*
  open(consulta: Consulta) {
    this.consulta = consulta;
    const modal = this.modalService.open(NgbdModalConfirm);

    modal.componentInstance.consulta = this.consulta;
    modal.componentInstance.parentComponent = this;
  }

  public delete() {

  }
  */
}
