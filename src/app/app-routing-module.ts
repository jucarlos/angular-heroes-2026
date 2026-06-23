import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Counter } from './counter/counter';

const routes: Routes = [

  {
    path: 'counter',
    component: Counter,
  },
  {
    path: 'heroes',
    loadChildren:
    () => import('./heroes/heroes-module').then( m => m.HeroesModule),
  },

  // ruta por defecto
  {
    path: '**',
    redirectTo: 'counter'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
