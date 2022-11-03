import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private dbzService:DbzService) { }

  ngOnInit(): void {
  }

  cambiarNombre(event: any): void {
    console.log(event.target.value);
  }

  nuevo: Personaje = {
    nombre: 'Maestro roshi',
    poder: 500
  }

  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }


  // agregarNuevoPersonaje(argumento: Personaje){

  //   this.dbzService.agregarPersonajes(argumento)
  //   console.log(argumento, 'emitido');
  // }


}

