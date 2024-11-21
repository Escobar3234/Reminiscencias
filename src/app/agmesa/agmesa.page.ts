import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-agmesa',
  templateUrl: './agmesa.page.html',
  styleUrls: ['./agmesa.page.scss'],
})
export class AgmesaPage implements OnInit {
  idMesa: number | null = null; // Inicializar idMesa
  idUsuario: number = 1; // Debes obtener este valor del usuario autenticado

  constructor(private http: HttpClient, private toastController: ToastController, private navCtrl: NavController) {}

  ngOnInit() {}

  async unirseMesa() {
    const data = {
      idMesa: this.idMesa,
      idUsuario: this.idUsuario,
    };

    this.http.post('http://localhost:3000/unirse-mesa', data).subscribe(
      async (response: any) => {
        if (response.error) {
          const toast = await this.toastController.create({
            message: response.error,
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        } else {
          const toast = await this.toastController.create({
            message: 'Te has unido a la mesa exitosamente',
            duration: 2000,
            color: 'success',
          });
          toast.present();

          // Redirigir a la página para crear el personaje con el ID de la mesa
          this.navCtrl.navigateRoot('/personaje', {
            queryParams: { idMesa: this.idMesa },
          });
        }
      },
      async (error) => {
        const toast = await this.toastController.create({
          message: 'Error al unirse a la mesa. Intenta nuevamente.',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
      }
    );
  }
}
