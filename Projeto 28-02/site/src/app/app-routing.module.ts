import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CalculadoraComponent} from './paginas/calculadora/calculadora.component';
import { ImcComponent } from './paginas/imc/imc.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'calculadora', component:CalculadoraComponent},
  {path:'imc', component:ImcComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
