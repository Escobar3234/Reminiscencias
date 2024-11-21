import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'rol',
    loadChildren: () => import('./rol/rol.module').then(m => m.RolPageModule)
  },
  {
    path: 'mesas',
    loadChildren: () => import('./mesas/mesas.module').then(m => m.MesasPageModule)
  },
  {
    path: 'perma1/:idMesa',  // Ruta con el parámetro idMesa
    loadChildren: () => import('./perma1/perma1.module').then(m => m.Perma1PageModule)
  },
  {
    path: 'agmesa',
    loadChildren: () => import('./agmesa/agmesa.module').then(m => m.AgmesaPageModule)
  },
  {
    path: 'agumesa',
    loadChildren: () => import('./agumesa/agumesa.module').then(m => m.AgumesaPageModule)
  },
  {
    path: 'escojerp',
    loadChildren: () => import('./escojerp/escojerp.module').then(m => m.EscojerpPageModule)
  },
  {
    path: 'personaje',
    loadChildren: () => import('./personaje/personaje.module').then(m => m.PersonajePageModule)
  },
  {
    path: 'stadisticas',
    loadChildren: () => import('./stadisticas/stadisticas.module').then(m => m.StadisticasPageModule)
  },
  {
    path: 'stadisticas1',
    loadChildren: () => import('./stadisticas1/stadisticas1.module').then(m => m.Stadisticas1PageModule)
  },
  {
    path: 'hoja-persona',
    loadChildren: () => import('./hoja-persona/hoja-persona.module').then(m => m.HojaPersonaPageModule)
  },
  {
    path: 'stadisticas2',
    loadChildren: () => import('./stadisticas2/stadisticas2.module').then(m => m.Stadisticas2PageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./habilidades/habilidades.module').then(m => m.HabilidadesPageModule)
  },
  {
    path: 'debilidades',
    loadChildren: () => import('./debilidades/debilidades.module').then(m => m.DebilidadesPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./inventario/inventario.module').then(m => m.InventarioPageModule)
  },
  {
    path: 'caract1',
    loadChildren: () => import('./caract1/caract1.module').then(m => m.Caract1PageModule)
  },
  {
    path: 'agrusme',
    loadChildren: () => import('./agrusme/agrusme.module').then(m => m.AgrusmePageModule)
  },
  {
    path: 'caract2',
    loadChildren: () => import('./caract2/caract2.module').then(m => m.Caract2PageModule)
  },
  {
    path: 'mesas-jugador',
    loadChildren: () => import('./mesas-jugador/mesas-jugador.module').then(m => m.MesasJugadorPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
