import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage implements OnInit, ViewWillEnter {
  mesas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Si deseas cargar al inicio también
    this.loadMesas();
  }

  ionViewWillEnter() {
    this.loadMesas();
  }

  loadMesas() {
    this.http.get<any[]>('http://localhost:3000/mesas').subscribe(
      (data) => {
        this.mesas = data;
      },
      (error) => {
        console.error('Error al obtener las mesas:', error);
      }
    );
  }
}
