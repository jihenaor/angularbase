import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CompaniaService } from '@compania/shared/service/compania.service';
import { Compania } from '@compania/shared/model/compania';

@Component({
  selector: 'app-listar-compania',
  templateUrl: './listar-compania.component.html',
  styleUrls: ['./listar-compania.component.css']
})
export class ListarCompaniaComponent implements OnInit {
  public listaCompanias: Observable<Compania[]>;

  constructor(protected companiaService: CompaniaService) { }

  ngOnInit() {
    this.listaCompanias = this.companiaService.consultar();
  }

}
