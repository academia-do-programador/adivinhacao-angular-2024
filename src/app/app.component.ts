import { NgForOf, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf],
  templateUrl: "app.component.html",
})
export class AppComponent {
  public dicaNumeroMaiorQue: number = 1;
  public dicaNumeroMenorQue: number = 100;

  public numeroDigitado: number = 0;
  public numeroSecreto: number = 0;

  public jogoEstaFinalizado: boolean = false;

  public numerosDigitados: number[] = [];

  constructor() {
    this.reiniciar();
  }

  public adivinhar(): void {
    this.numerosDigitados.push(this.numeroDigitado);

    if (this.numeroDigitado < this.numeroSecreto)
      this.dicaNumeroMaiorQue = this.numeroDigitado;
    else if (this.numeroDigitado > this.numeroSecreto)
      this.dicaNumeroMenorQue = this.numeroDigitado;
    else this.jogoEstaFinalizado = true;
  }

  public reiniciar(): void {
    this.dicaNumeroMaiorQue = 1;
    this.dicaNumeroMenorQue = 100;

    this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
    this.numeroDigitado = 1;
    this.jogoEstaFinalizado = false;

    this.numerosDigitados = [];
  }
}
