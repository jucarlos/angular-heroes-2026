import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Counter } from './counter/counter';
import { HeroesModule } from './heroes/heroes-module';


@NgModule({
  declarations: [
    App,
    Counter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,

  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
