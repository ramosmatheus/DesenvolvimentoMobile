import { Component } from '@angular/core';
import { Estado } from '../entidades/estado';

@Component({
  selector:'cadastroPessoa-component',
  templateUrl:'cadastroPessoa.component.html',
  styleUrls:['cadastroPessoa.component.css']

})
export class CadastroPessoaComponent{


  listaEstado = new Array<Estado>();
  estado : Estado = new Estado();


  cadastrar(): void {
    this.listaEstado.push(this.estado);

    this.estado = new Estado();
  }

  excluir(i:number): void{
    this.listaEstado.splice(i,1)
  }
  alterar(i:number): void{
    this.estado = this.listaEstado[i];
    this.listaEstado.splice(i,1)
  }

  constructor(){

    //console.log(pessoa.name);

  }

}
