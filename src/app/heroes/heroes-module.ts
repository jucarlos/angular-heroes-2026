import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing-module';
import { Heroes } from './heroes/heroes';
import { Heroe } from './heroe/heroe';

@NgModule({
  declarations: [
    Heroes,
    Heroe


  ],
  imports: [CommonModule, HeroesRoutingModule],

  exports: [
    Heroes,
    Heroe,
  ]
})
export class HeroesModule {}

