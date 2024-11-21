import { Component } from '@angular/core';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage {
  items = [
    { name: 'Espada de Hierro', image: '/assets/spada.png', info: 'Una espada básica hecha de hierro.', equipped: false },
    { name: 'Escudo de Madera', image: '/assets/scudo.png', info: 'Un escudo resistente hecho de madera.', equipped: false },
    { name: 'Poción de Salud', image: '/assets/posi.png', info: 'Restaura 50 puntos de salud.', equipped: false },
    { name: 'Casco de Acero', image: '/assets/casco.png', info: 'Un casco que protege la cabeza.', equipped: false },
    { name: 'Armadura de Cuero', image: '/assets/armadura.png', info: 'Proporciona protección básica.', equipped: false },
    { name: 'Botas de Explorador', image: '/assets/botas.png', info: 'Ideales para largas caminatas.', equipped: false },
    // Agrega más elementos según sea necesario
  ];

  toggleEquip(item: any) {
    item.equipped = !item.equipped;
  }
}
 