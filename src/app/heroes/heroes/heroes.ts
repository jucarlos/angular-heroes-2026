import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {

  public heroesNames: string[] =
  ['Spiderman', 'IronMan', 'Hulk', 'Thor'];

  public deleteHeroe?: string ;



  removeLastHeroe() {

    // método para borrar el último elemento de la lista.
    this.deleteHeroe = this.heroesNames.pop();

    console.log('Estoy en el método para borrar');

  }

}
