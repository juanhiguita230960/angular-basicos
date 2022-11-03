import { Injectable } from '@angular/core'
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 500
    },
    {
      nombre: 'Vegueta',
      poder: 800
    },
    {
      nombre: 'Gohan',
      poder: 100
    }
  ];

  get personajes(){
    return [...this._personajes];
  }


  constructor() {}

  agregarPersonajes(personaje: Personaje){
    this._personajes.push(personaje);
  }




}
