import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stadisticas2',
  templateUrl: './stadisticas2.page.html',
  styleUrls: ['./stadisticas2.page.scss'],
})
export class Stadisticas2Page {
  stats: { [key: string]: number } = {
    MOSCULATURA: 10,
    PUNTERIA: 10,
    SALUD: 10,
    LOGICA: 10,
    INTUICION: 10,
    VERBORREA: 10,
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

