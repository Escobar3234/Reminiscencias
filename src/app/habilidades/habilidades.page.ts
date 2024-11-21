import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
})
export class HabilidadesPage implements OnInit {
  habilidades = [
    { name: 'Fuerza', image: '/assets/fuerza.jpg', description: 'Aumenta el daño físico.' },
    { name: 'Velocidad', image: '/assets/velocidad.jpg', description: 'Incrementa la rapidez de movimiento.' },
    { name: 'Inteligencia', image: '/assets/inteligencia.jpg', description: 'Mejora las habilidades mágicas.' },
    { name: 'Sigilo', image: '/assets/sigilo.jpg', description: 'Aumenta la capacidad de pasar desapercibido.' },
    { name: 'Carisma', image: '/assets/carisma.jpg', description: 'Mejora las interacciones sociales.' },
    { name: 'Precisión', image: '/assets/precision.png', description: 'Aumenta la probabilidad de acertar ataques.' },
    { name: 'Defensa', image: '/assets/defensa.jpg', description: 'Reduce la probabilidad de recibir daño.' },
    { name: 'Reflejos', image: '/assets/reflejos.jpg', description: 'Mejora las reacciones en combate.' },
    { name: 'Agilidad', image: '/assets/agilidad.jpg', description: 'Facilita los movimientos evasivos.' },
  ];

  habilidadSeleccionada: any = null;

  constructor() {}

  ngOnInit(): void {}

  seleccionarHabilidad(habilidad: any): void {
    this.habilidadSeleccionada = habilidad;
  }
}
