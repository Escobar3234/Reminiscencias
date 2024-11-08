import { Component } from '@angular/core';

@Component({
  selector: 'app-stadisticas',
  templateUrl: './stadisticas.page.html',
  styleUrls: ['./stadisticas.page.scss'],
})
export class stadisticasPage {
  stats: { [key: string]: number } = {
    fuerza: 10,
    destreza: 10,
    constitucion: 10,
    inteligencia: 10,
    sabiduria: 10,
    apariencia: 10,
    estamina: 10,
    balance: 10,
    resistencia: 10,
    conocimiento: 10
  };

  increment(stat: string) {
    this.stats[stat]++;
  }

  decrement(stat: string) {
    if (this.stats[stat] > 0) {
      this.stats[stat]--;
  }
}
}
