import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correoElectronico: string = '';
  contrasena: string = '';
  rol: string = ''; 

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async login() {
    if (this.correoElectronico && this.contrasena && this.rol) {
      const data = {
        correoElectronico: this.correoElectronico,
        contrasena: this.contrasena,
        rol: this.rol,
      };

      this.http.post('http://localhost:3000/ingreso', data).subscribe(
        async (response: any) => {
          if (response.success) {
            const toast = await this.toastController.create({
              message: 'Inicio de sesión exitoso',
              duration: 2000,
              color: 'success',
            });
            toast.present();

            if (this.rol === 'Máster') {
              this.navCtrl.navigateRoot('/mesas'); 
            } else if (this.rol === 'Jugador') {
              this.navCtrl.navigateRoot('/mesas-jugador'); 
            }
          } else {
            const toast = await this.toastController.create({
              message: 'Correo electrónico o contraseña incorrectos',
              duration: 2000,
              color: 'danger',
            });
            toast.present();
          }
        },
        async (error) => {
          console.error('Error al iniciar sesión:', error);
          const toast = await this.toastController.create({
            message: 'Error al iniciar sesión. Intente nuevamente.',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      );
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, complete todos los campos',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }

  async register() {
    this.navCtrl.navigateRoot('register');
  }
}
