import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  standalone: false,
  templateUrl: './heroe.html',
  styleUrl: './heroe.css',
})
export class Heroe {

  public name: string = 'ironman';
  public age: number = 45;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroeDesciption(): string {
    return `${this.name} tiene ${this.age}`;
  }

  changeName(){

    this.name = 'Spiderman';
  }

  changeAge() {
    this.age = 20;
  }

  reset() {

    this.name = 'ironman';
    this.age = 45;

  }



}
