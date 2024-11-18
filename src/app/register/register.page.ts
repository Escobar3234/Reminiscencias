import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  correoElectronico: string = '';
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
    if (this.correoElectronico && this.apodo && this.contrasena && this.rol) {
      // Validar correo electrónico
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.correoElectronico)) {
        const toast = await this.toastController.create({
          message: 'Por favor, ingrese un correo electrónico válido',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
        return;
      }

      // Validar longitud de la contraseña
      if (this.contrasena.length < 6) {
        const toast = await this.toastController.create({
          message: 'La contraseña debe tener al menos 6 caracteres',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
        return;
      }

      const data = {
        correoElectronico: this.correoElectronico,
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
              message: 'El usuario con este correo ya está registrado',
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
