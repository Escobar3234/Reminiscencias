import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perma1',
  templateUrl: './perma1.page.html',
  styleUrls: ['./perma1.page.scss'],
})
export class Perma1Page implements OnInit {
  jugadores: any[] = [];
  idMesa: number | null = null; // Inicializar idMesa

  constructor(private route: ActivatedRoute, private http: HttpClient, private toastController: ToastController) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idMesa = +params['idMesa'];
      this.obtenerJugadores();
    });
  }

  obtenerJugadores() {
    if (this.idMesa !== null) {
      this.http.get(`http://localhost:3000/jugadores-mesa/${this.idMesa}`).subscribe(
        (response: any) => {
          console.log('Jugadores recibidos:', response);
          this.jugadores = response;
        },
        async (error) => {
          console.error('Error al obtener los jugadores de la mesa:', error);
          const toast = await this.toastController.create({
            message: 'Error al obtener los jugadores de la mesa. Intenta nuevamente.',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        }
      );
    }
  }
}
