import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { CalculadoraComponent } from './paginas/calculadora/calculadora.component';
import { ImcComponent } from './paginas/imc/imc.component';
import { CadastroPessoaComponent } from './paginas/cadastroPessoa/cadastroPessoa.component';
import { ProdutoComponent } from './paginas/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, CalculadoraComponent, ImcComponent, CadastroPessoaComponent, ProdutoComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
