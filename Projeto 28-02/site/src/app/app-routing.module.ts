import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CalculadoraComponent} from './paginas/calculadora/calculadora.component';
import { ImcComponent } from './paginas/imc/imc.component';
import { CadastroPessoaComponent } from './paginas/cadastroPessoa/cadastroPessoa.component';
import { ProdutoComponent } from './paginas/produto/produto.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'calculadora', component:CalculadoraComponent},
  {path:'imc', component:ImcComponent},
  {path:'cadastro', component:CadastroPessoaComponent},
  {path:'produto', component:ProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
