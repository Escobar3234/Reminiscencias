import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caract2',
  templateUrl: './caract2.page.html',
  styleUrls: ['./caract2.page.scss'],
})
export class Caract2Page implements OnInit {
  dropdownVisible: string | null = null; // Cambiamos a string para indicar qué dropdown está visible

  constructor() {}

  ngOnInit() {}

  toggleDropdown(type: string) {
    // Si ya está visible, lo ocultamos; si no, mostramos el seleccionado
    this.dropdownVisible = this.dropdownVisible === type ? null : type;
  }
}
