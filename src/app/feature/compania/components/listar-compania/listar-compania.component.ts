import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CompaniaService } from '@compania/shared/service/compania.service';
import { Compania } from '@compania/shared/model/compania';

// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
/*
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
    <p><strong>Are you sure you want to delete <span class="text-primary">{{ compania.razonsocial }}</span> profile?</strong></p>
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
  @Input() public compania: Compania;
  public parentComponent: OnInit;

  constructor(public modal: NgbActiveModal) {}

  public onConfirm(): void {
    this.modal.dismiss('cancel click');
    //this.parentComponent.delete();
  }
}
*/
@Component({
  selector: 'app-listar-compania',
  templateUrl: './listar-compania.component.html',
  styleUrls: ['./listar-compania.component.css']
})
export class ListarCompaniaComponent implements OnInit {
  public listaCompanias: Observable<Compania[]>;
//  private compania: Compania;
  errorMsg: string;

//  constructor(private modalService: NgbModal, protected companiaService: CompaniaService) { }
  constructor(protected companiaService: CompaniaService) { }

  ngOnInit() {

      this.listaCompanias = this.companiaService.consultar().pipe(
        catchError(error => {
            this.errorMsg = error;
            return of([]);
        })
    );
  }
/*
  open(compania: Compania) {
    this.compania = compania;
    const modal = this.modalService.open(NgbdModalConfirm);

    modal.componentInstance.compania = this.compania;
    modal.componentInstance.parentComponent = this;
  }

  public delete() {

  }
  */
}
