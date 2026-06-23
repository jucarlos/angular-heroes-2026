import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'app-sidemenu',
  standalone: false,
  templateUrl: './sidemenu.html',
  styleUrl: './sidemenu.css',
})


export class Sidemenu {


  public menuApp: MenuItem[]  = [
     {
      title: 'Contador',
      route: 'counter'
     },
     {
      title: 'Heroes',
      route: 'heroes/heroes'
     },
     {
      title: 'Heroe',
      route: 'heroes/heroe'
     }
  ]




}
