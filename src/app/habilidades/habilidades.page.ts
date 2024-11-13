import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
})
export class HabilidadesPage {
  skills = [
    {
      name: 'fuerza',
      image: '/assets/av1.jpg',
      info: 'aumenta su fuerza contante mas pasa el tiempo .',
      showInfo: false
    },
    {
      name: 'escudo de atenea',
      image: '/assets/av2.jpg',
      info: 'escudo que te sube el coraje y la salud  .',
      showInfo: false
    },
    {
      name: 'mana',
      image: '/assets/av3.jpg',
      info: 'suministra el valance del mana  .',
      showInfo: false
    },
    {
      name: 'cruz de plata',
      image: '/assets/av4.jpg',
      info: 'cruz de palatab .',
      showInfo: false
    },
    
    // Agrega más habilidades según sea necesario
  ];

  toggleInfo(skill: any) {
    // Alterna la propiedad showInfo de la habilidad seleccionada
    skill.showInfo = !skill.showInfo;
  }
}
