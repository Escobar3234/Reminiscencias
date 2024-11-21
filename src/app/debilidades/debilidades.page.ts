import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debilidades',
  templateUrl: './debilidades.page.html',
  styleUrls: ['./debilidades.page.scss'],
})
export class DebilidadesPage implements OnInit {
  items = [
    { name: 'Envenenamiento', image: '/assets/veneno.png', info: 'Fue causada por la picadura de una serpiente.' },
    { name: 'Maldiciones', image: '/assets/mald.png', info: 'Ocasionada por una trampa mágica.' },
    { name: 'Cansancio', image: '/assets/can.png', info: 'Causada por mal entrenamiento de los músculos.' },
    { name: 'Huesos Rotos', image: '/assets/hues.png', info: 'Causada por una caída desde gran altura o una trampa.' },
    // Agrega más elementos aquí
  ];

  selectedItem: any = null; // Inicializa como null para evitar errores

  constructor() {}

  ngOnInit(): void {
    // Este método se ejecuta al inicializar el componente
  }

  // Método para seleccionar un elemento
  selectItem(item: any): void {
    this.selectedItem = item;
  }
}
