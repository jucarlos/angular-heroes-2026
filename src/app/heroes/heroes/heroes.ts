import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {

  public heroesNames: string[] =  ['Spiderman', 'IronMan', 'Hulk', 'Thor'];



  removeLastHeroe() {

    // método para borrar el último elemento de la lista.

    console.log('Estoy en el método para borrar');

  }

}
