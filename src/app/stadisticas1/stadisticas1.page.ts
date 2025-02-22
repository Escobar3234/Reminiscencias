import { Component } from '@angular/core';

@Component({
  selector: 'app-stadisticas1',
  templateUrl: './stadisticas1.page.html',
  styleUrls: ['./stadisticas1.page.scss'],
})
export class Stadisticas1Page {
  stats: { [key: string]: number } = {
    ESTAMINA: 10,
    BALANCE: 10,
    RESISTENCIA: 10,
    CONOCIMIENTO: 10,
    FVOLUNTAD: 10,
    CARISMA: 10,
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
