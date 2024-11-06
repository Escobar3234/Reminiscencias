import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string = '';
  email: string = '';
  password: string = '';
  role: string = '';

  constructor(private router: Router) {}

  formValid() {
    return this.name && this.email && this.password && this.role;
  }

  register() {
    if (this.formValid()) {
      // Aquí iría la lógica de registro
      console.log('Registro:', this.name, this.email, this.password, this.role);
      // Después de registrarse, redirigir al usuario al login
      this.router.navigate(['/login']);
    }
  }
}
