import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'SuperMan'];
  heroeBorrado: string = '';

  borrarHeroe(){
    this.heroes.splice(this.heroes.length-1,1);
  }

  borrarPrimerHeroe(){

      this.heroeBorrado =  this.heroes.shift() || '';

  }


}
