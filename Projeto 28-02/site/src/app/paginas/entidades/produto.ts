export class Produto{
  private nome : string;
  private descricao : string;
  private preco : number;

  getNome() : string{
    return this.nome;
  }
  setNome(nome : string) : void{
    this.nome = nome;
  }

  getDescricao() : string{
    return this.descricao;
  }
  setDescricao(descricao : string) : void{
    this.descricao = descricao;
  }

  getPreco() : number{
    return this.preco;
  }

  setPreco(preco : number): void{
    this.preco = preco;
  }




}
