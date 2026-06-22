import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.html',
  styleUrl: './counter.css',

})
export class Counter {


  public contador: number = 100;



  cambiarValor(valor: number ) {
    this.contador += valor;

  }


  reset() {
    this.contador = 100;
  }




}
