import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CompaniaService } from '@compania/shared/service/compania.service';
import { Compania } from '@compania/shared/model/compania';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-borrar-compania',
  templateUrl: './borrar-compania.component.html',
  styleUrls: ['./borrar-compania.component.css']
})
export class BorrarCompaniaComponent implements OnInit {
  public listaCompanias: Observable<Compania[]>;
  msg: string;

  constructor(protected companiaService: CompaniaService) { }

  ngOnInit() {
    this.listaCompanias = this.companiaService.consultar();
  }

  private deleteCompanyArray(compania: Compania): void {
    this.listaCompanias = this.listaCompanias.pipe (
      map(items =>
       items.filter(item => item.id !== compania.id)));
  }

  onEliminar(compania: Compania) {
    this.companiaService.eliminar(compania);

    this.deleteCompanyArray(compania);

    this.msg = 'Eliminado exitoso';
  }
}
