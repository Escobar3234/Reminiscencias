import { Component } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage {
  items = [
    { name: 'Item 1', image: '/assets/item1.png', info: 'Descripción del Item 1' },
    { name: 'Item 2', image: '/assets/item2.png', info: 'Descripción del Item 2' },
    // Agrega más elementos de inventario aquí
  ];
  selectedItem: any;
}
