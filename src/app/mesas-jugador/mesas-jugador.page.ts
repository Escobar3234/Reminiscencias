import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mesas-jugador',
  templateUrl: './mesas-jugador.page.html',
  styleUrls: ['./mesas-jugador.page.scss'],
})
export class MesasJugadorPage implements OnInit {

  imageSrc: string = '/assets/personaje.png'; 
  mesaName: string = 'Valle de la Muerte'; 
  mesaId: string = '232323';

  constructor() { }

  ngOnInit() {
  }

}
