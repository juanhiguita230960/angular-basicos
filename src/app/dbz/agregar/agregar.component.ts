import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }

  @Input()
  personajeNuevo: Personaje = {
    nombre: '',
    poder: 0
  }


  // @Output()
  // onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();



  agregar(){
    if(this.personajeNuevo.nombre.trim().length > 0 ){
      console.log(this.personajeNuevo);
      // this.onNuevoPersonaje.emit(this.personajeNuevo);
      this.dbzService.agregarPersonajes(this.personajeNuevo)
      this.personajeNuevo = {
        nombre:'',
        poder: 0
      }
    }

  }



}
