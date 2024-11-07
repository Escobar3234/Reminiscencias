import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggmesa',
  templateUrl: './aggmesa.page.html',
  styleUrls: ['./aggmesa.page.scss'],
})
export class AggmesaPage {
  nombreMesa: string = '';  // Define la propiedad nombreMesa

  constructor(private router: Router) {}

  addMesa() {  // Define el método addMesa
    if (this.nombreMesa.trim() !== '') {
      const storedMesas = localStorage.getItem('mesas');
      const mesas = storedMesas ? JSON.parse(storedMesas) : [];
      mesas.push(this.nombreMesa);
      localStorage.setItem('mesas', JSON.stringify(mesas));
      this.router.navigate(['/aggmesa']);
    }
  }
}
