import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesModule } from './heroes-module';

const routes: Routes = [




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
