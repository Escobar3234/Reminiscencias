import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
})
export class PersonajePage implements OnInit {
  nombrePersonaje: string = '';
  apodo: string = '';
  edad: number | null = null;  // Inicializar edad
  altura: number | null = null;  // Inicializar altura
  idMesa: number | null = null;  // Inicializar idMesa
  idUsuario: number = 1; // Debes obtener este valor del usuario autenticado
  selectedFile: File | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private toastController: ToastController, private navCtrl: NavController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.idMesa = params['idMesa'];
      this.cargarDatosUsuario();
    });
  }

  cargarDatosUsuario() {
    this.http.get(`http://localhost:3000/usuario/${this.idUsuario}`).subscribe(
      (response: any) => {
        this.apodo = response.apodo;  // Autocompletar el campo de apodo
      },
      (error) => {
        console.error('Error al cargar los datos del usuario:', error);
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('File selected:', file);
    }
  }

  async guardarPersonaje() {
    const formData = new FormData();
    formData.append('nombrePersonaje', this.nombrePersonaje);
    formData.append('apodo', this.apodo);
    formData.append('edad', this.edad?.toString() || '');
    formData.append('altura', this.altura?.toString() || '');
    formData.append('idMesa', this.idMesa?.toString() || '');
    formData.append('idUsuario', this.idUsuario.toString());
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile, this.selectedFile.name);
    }

    this.http.post('http://localhost:3000/guardar-personaje', formData).subscribe(
      async (response: any) => {
        console.log('Respuesta del servidor:', response);
        
        const toast = await this.toastController.create({
          message: 'Personaje guardado exitosamente',
          duration: 2000,
          color: 'success',
        });
        toast.present();
        
        // Redirigir a la página de mesas del jugador
        this.navCtrl.navigateRoot('/mesas-jugador');
      },
      async (error) => {
        console.error('Error al guardar el personaje:', error);
        
        const toast = await this.toastController.create({
          message: 'Error al guardar el personaje. Intenta nuevamente.',
          duration: 2000,
          color: 'danger',
        });
        toast.present();
      }
    );
  }
}
