import { Component } from '@angular/core';
import { Produto } from '../entidades/produto';

@Component({
  selector:'produto-component',
  templateUrl:'produto.component.html',
  styleUrls:['produto.component.css']

})
export class ProdutoComponent{


  listaProduto = new Array<Produto>();
  produto : Produto = new Produto();


  cadastrar(): void {
    this.listaProduto.push(this.produto);

    this.produto = new Produto();
  }

  excluir(i:number): void{
    this.listaProduto.splice(i,1)
  }
  alterar(i:number): void{
    this.produto = this.listaProduto[i];
    this.listaProduto.splice(i,1)
  }

  constructor(){

    //console.log(pessoa.name);

  }

}
