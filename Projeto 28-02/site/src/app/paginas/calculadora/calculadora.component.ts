import { Component } from '@angular/core';

@Component({
  selector:'calculadora-component',
  templateUrl:'calculadora.component.html',
  styleUrls:['calculadora.component.css']

})
export class CalculadoraComponent{

  nome : string = "Matheus";
  valor1: number;
  valor2: number;
  total: number;

  clique(): void {
    this.total = this.somar();

  }

  somar(): number {
    this.total = Number(this.valor1) + Number(this.valor2);

    return this.total;
  }

}
