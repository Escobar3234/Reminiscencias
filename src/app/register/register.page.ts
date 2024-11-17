import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  usuario: string = '';
  apodo: string = '';
  contrasena: string = '';
  rol: string = '';

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private http: HttpClient
  ) {}

  goToLogin() {
    this.navCtrl.navigateForward('/ingreso');
  }

  async register() {
    if (this.usuario && this.apodo && this.contrasena && this.rol) {
      const data = {
        usuario: this.usuario,
        apodo: this.apodo,
        contrasena: this.contrasena,
        rol: this.rol,
      };

      // Enviar datos al servidor
      this.http.post('http://localhost:3000/register', data).subscribe(
        async (response: any) => {
          console.log('Usuario registrado:', response);

          // Mostrar mensaje de éxito
          const toast = await this.toastController.create({
            message: 'Registro exitoso',
            duration: 2000,
            color: 'success',
          });
          toast.present();

          // Redirigir después de mostrar el toast
          setTimeout(() => {
            this.navCtrl.navigateRoot('/login');
          }, 2000); // Esperar 2 segundos antes de redirigir
        },
        async (error) => {
          console.error('Error al registrar:', error);

          // Mostrar mensaje si el usuario ya existe
          if (error.status === 409) {
            const toast = await this.toastController.create({
              message: 'El usuario con este rol ya está registrado',
              duration: 2000,
              color: 'danger',
            });
            toast.present();
          } else {
            // Mostrar mensaje genérico de error
            const toast = await this.toastController.create({
              message: 'Error al registrar. Intente nuevamente.',
              duration: 2000,
              color: 'danger',
            });
            toast.present();
          }
        }
      );
    } else {
      // Mostrar un mensaje de error si falta algún campo
      const toast = await this.toastController.create({
        message: 'Por favor, complete todos los campos',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}
