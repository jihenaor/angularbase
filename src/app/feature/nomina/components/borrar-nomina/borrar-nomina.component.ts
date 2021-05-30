import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CompaniaService } from '@nomina/shared/service/nomina.service';
import { Nomina } from '@nomina/shared/model/nomina';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-borrar-nomina',
  templateUrl: './borrar-nomina.component.html',
  styleUrls: ['./borrar-nomina.component.css']
})
export class BorrarCompaniaComponent implements OnInit {
  public listaCompanias: Observable<Nomina[]>;
  msg: string;

  constructor(protected nominaService: CompaniaService) { }

  ngOnInit() {
    this.listaCompanias = this.nominaService.consultar();
  }

  private deleteCompanyArray(nomina: Nomina): void {
    this.listaCompanias = this.listaCompanias.pipe (
      map(items =>
       items.filter(item => item.id !== nomina.id)));
  }

  onEliminar(nomina: Nomina) {
    this.nominaService.eliminar(nomina);

    this.deleteCompanyArray(nomina);

    this.msg = 'Eliminado exitoso';
  }
}
