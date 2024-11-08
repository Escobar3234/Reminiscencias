import { Component } from '@angular/core';

@Component({
  selector: 'app-escojerp',
  templateUrl: './escojerp.page.html',
  styleUrls: ['./escojerp.page.scss'],
})
export class EscojerpPage {
  name: string = '';
  email: string = '';
  password: string = '';
  role: string = '';

  // Método para manejar el envío del formulario
  escojerp() {
    // Lógica para el envío del formulario
    console.log('Formulario enviado:', {
      name: this.name,
      password: this.password,
      role: this.role
    });
  }

  // Método para validar el formulario
  formValid(): boolean {
    return this.name !== '' && this.email !== '' && this.password !== '' && this.role !== '';
  }
}

