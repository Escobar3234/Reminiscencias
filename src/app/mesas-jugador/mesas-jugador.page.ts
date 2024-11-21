import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mesas-jugador',
  templateUrl: './mesas-jugador.page.html',
  styleUrls: ['./mesas-jugador.page.scss'],
})
export class MesasJugadorPage implements OnInit {
  mesas: any[] = [];
  idUsuario: number = 1; // Debes obtener este valor del usuario autenticado

  constructor(private http: HttpClient, private toastController: ToastController, private navCtrl: NavController) {}

  ngOnInit() {
    this.obtenerMesas();
  }

  obtenerMesas() {
    this.http.get(`http://localhost:3000/mesas-usuario/${this.idUsuario}`).subscribe(
      (response: any) => {
        console.log('Mesas recibidas:', response);
        this.mesas = response;
      },
      async (error) => {
        console.error('Error al obtener las mesas del usuario:', error);
        const toast = await this.toastController.create({
          message: 'Error al obtener las mesas del usuario. Intenta nuevamente.',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
      }
    );
  }
}
