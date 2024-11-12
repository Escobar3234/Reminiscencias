import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
})
export class HabilidadesPage {
  skills = [
    {
      name: 'Gwynevere',
      image: '/assets/fen.jpeg',
      info: 'El que perdonaba murió en la cruz .',
      showInfo: false
    },
    {
      name: 'la dama de negro',
      image: '/assets/my.jpeg',
      info: 'my vida.',
      showInfo: false
    },
    // Agrega más habilidades según sea necesario
  ];

  toggleInfo(skill: any) {
    // Alterna la propiedad showInfo de la habilidad seleccionada
    skill.showInfo = !skill.showInfo;
  }
}
