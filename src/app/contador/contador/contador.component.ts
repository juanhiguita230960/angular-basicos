import { Component } from '@angular/core'


@Component({
  selector: 'app-contador',
  template:`

      {{ title }}


      Base: {{ base }}

      <BUtton (click)="operar(-base)">- {{ base}} </BUtton>

      <span>{{ numero }}</span>

      <BUtton (click)="operar(base)">+ {{ base }}</BUtton>
  `
})
export class ContadorComponent {


  public title: string = 'bases';

  public numero: number = 0;
  public base: number = 5;

  operar(base: number){
    this.numero += base;
  }
}
