import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Heroes } from './heroes/heroes';
import { Heroe } from './heroe/heroe';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'heroes',
        component: Heroes,

      },
      {
        path: 'heroe',
        component: Heroe
      },
      {
        path: '**',
        redirectTo: 'heroe',
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
