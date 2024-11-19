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
      media: 'assets/fuerza.mp4',
      mediaType: 'video',
      info: 'Aumenta su fuerza contante más pasa el tiempo.',
      showInfo: false
    },
    {
      name: 'mana',
      media: 'assets/mana.mp4',
      mediaType: 'video',
      info: 'Suministra el balance del mana.',
      showInfo: false
    },
    {
      name: 'cruz de plata',
      media: 'assets/av4.jpg',
      mediaType: 'image',
      info: 'Cruz de plata.',
      showInfo: false
    },

  ];

  toggleInfo(skill: any) {
    skill.showInfo = !skill.showInfo;
  }
}
