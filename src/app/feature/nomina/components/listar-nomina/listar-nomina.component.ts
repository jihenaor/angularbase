import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NominaService } from '@nomina/shared/service/nomina.service';
import { Nomina } from '@nomina/shared/model/nomina';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Profile deletion</h4>
    <button type="button" class="close" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete <span class="text-primary">{{ nomina.razonsocial }}</span> profile?</strong></p>
    <p>All information associated to this user profile will be permanently deleted.
    <span class="text-danger">This operation can not be undone.</span>
    </p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.close('Ok click')">Cancel</button>
    <button type="button" class="btn btn-danger" (click)="onConfirm()">Ok</button>
  </div>
  `
})
export class NgbdModalConfirm {
  @Input() public nomina: Nomina;
  public parentComponent: OnInit;

  constructor(public modal: NgbActiveModal) {}

  public onConfirm(): void {
    this.modal.dismiss('cancel click');
    //this.parentComponent.delete();
  }
}

@Component({
  selector: 'app-listar-nomina',
  templateUrl: './listar-nomina.component.html',
  styleUrls: ['./listar-nomina.component.css']
})
export class ListarNominaComponent implements OnInit {
  public listaNominas: Observable<Nomina[]>;
  private nomina: Nomina;
  errorMsg: string;

  closeResult = '';

  constructor(private modalService: NgbModal, protected nominaService: NominaService) { }

  ngOnInit() {

      this.listaNominas = this.nominaService.consultar().pipe(
        catchError(error => {
            this.errorMsg = error;
            return of([]);
        })
    );;

  }

  open(nomina: Nomina) {
    this.nomina = nomina;
    const modal = this.modalService.open(NgbdModalConfirm);

    modal.componentInstance.nomina = this.nomina;
    modal.componentInstance.parentComponent = this;
  }

  public delete() {

  }
}
