import { Component } from '@angular/core';

@Component({
  selector:'imc-component',
  templateUrl:'imc.component.html',
  styleUrls:['imc.component.css']

})
export class ImcComponent{

  nome : string;
  listaNomes = new Array<string>();
  listaPeso = new Array<number>();
  listaAltura = new Array<number>();
  listaResult = new Array<String>();
  valor1: number;
  valor2: number;
  total: number;
  totalFinal: string;

  constructor(){//CRUD
    //this.listaNomes.push('Matheus');//inserir
    //this.listaNomes.push('Joao');
    //this.listaNomes.push('Pietra');
    //this.listaNomes.splice(0,1);
    //let indice = this.listaNomes.indexOf('Joao');

    //console.log(indice);

    //for(let nome of this.listaNomes){//listar
    //  console.log(nome);
    //}

  }

  clique(): void {
    this.listaNomes.push(this.nome);
    this.listaPeso.push(this.valor1);
    this.listaAltura.push(this.valor2);


    this.total = this.somar();
    if(this.total < 18.5){
      this.totalFinal = "Magreza";
    }else if(this.total < 24.9){
      this.totalFinal = "Normal";
    }else if(this.total < 30){
      this.totalFinal = "SobrePeso";
    }else if(this.total > 30){
      this.totalFinal = "Obesidade";
    }

    this.listaResult.push(this.totalFinal);

    this.nome = "";
    this.valor1 = 0;
    this.valor2 = 0;

  }


  somar(): number {
    this.total = Number(this.valor1) / (Number(this.valor2) * Number(this.valor2));

    return this.total;
  }

}
