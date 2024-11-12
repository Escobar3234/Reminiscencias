import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage implements OnInit {
  imageSrc: string = '/assets/personaje.png'; 
  mesaName: string = 'Valle de la Muerte'; 
  mesaId: string = '232323';

  constructor() { }

  ngOnInit() {
  }
}
