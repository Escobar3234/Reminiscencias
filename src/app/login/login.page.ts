import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';       // Define la propiedad usuario
  contrasena: string = '';    // Define la propiedad contrasena

  constructor(private router: Router) {}

  login() {  // Define el método login
    if (this.usuario === 'admin' && this.contrasena === 'admin') {
      this.router.navigate(['/home']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
