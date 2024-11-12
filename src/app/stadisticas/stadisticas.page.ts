import { Component } from '@angular/core';

@Component({
  selector: 'app-stadisticas',
  templateUrl: './stadisticas.page.html',
  styleUrls: ['./stadisticas.page.scss'],
})
export class stadisticasPage {
  stats: { [key: string]: number } = {
    FUERZA: 10,
    DESTREZA: 10,
    CONSTITUCION: 10,
    INTELIGENCIA: 10,
    SABIDURIA: 10,
    APARIENCIA: 10,
  };

  get totalPoints(): number {
     return Object.values(this.stats).reduce((a, b) => a + b, 0);
  }
 increment(stat: string) {
   if (this.totalPoints < 72) {
     this.stats[stat]++;
     }
   } 
   
   decrement(stat: string) { 
    if (this.stats[stat] > 0) { 
      this.stats[stat]--; 
    } 
  } 
}
