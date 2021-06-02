import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  opciones = [
      {id: 'Dashboard', link: '/home', status: 'active'},
      {id: 'Compañia', link: '/compania/listar', status: ''}, 
      {id: 'Nomina', link: '/nomina/listar', status: ''},
      {id: 'Consulta', link: '/consulta/listar', status: ''}
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
