import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-agumesa',
  templateUrl: './agumesa.page.html',
  styleUrls: ['./agumesa.page.scss'],
})
export class AgumesaPage implements OnInit {
  nombreMesa: string = '';
  cantidadJugadores: number = 0;

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async crearMesa() {
    if (this.nombreMesa && this.cantidadJugadores > 0) {
      const data = {
        nombreMesa: this.nombreMesa,
        cantidadJugadores: this.cantidadJugadores
      };

      this.http.post('http://localhost:3000/crear-mesa', data).subscribe(
        async (response: any) => {
          const toast = await this.toastController.create({
            message: 'Mesa creada exitosamente',
            duration: 2000,
            color: 'success',
          });
          toast.present();

          // Redirigir a la página de mesas después de crear la mesa
          this.navCtrl.navigateRoot('/mesas');
        },
        async (error) => {
          const toast = await this.toastController.create({
            message: 'Error al crear la mesa. Intente nuevamente.',
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
}
