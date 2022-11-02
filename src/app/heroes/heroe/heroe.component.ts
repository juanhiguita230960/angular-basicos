import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{

  nombre: string = 'Iron man';
  edad: number = 10;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `El nombre es ${this.nombre} y su edad es ${this.edad}`
  }

  cambiarNombre(): void {
    this.nombre = 'Batman';
  }

  cambiarEdad(): void {
    this.edad = 50;
  }


}
