import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent{
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
