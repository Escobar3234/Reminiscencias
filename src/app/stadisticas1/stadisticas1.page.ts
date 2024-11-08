import { Component } from '@angular/core';

@Component({
  selector: 'app-stadisticas1',
  templateUrl: './stadisticas1.page.html',
  styleUrls: ['./stadisticas1.page.scss'],
})
export class Stadisticas1Page {
  stats: { [key: string]: number } = {
    Fvoluntad: 10,
    carisma: 10,
    musculatura: 10,
    punteria: 10,
    salud: 10,
    logica: 10,
    intuicion: 10,
    verborrea: 10,
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
