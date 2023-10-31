import { Component } from '@angular/core';
import { BudgetService } from 'src/app/service/budget.service';

@Component({
  selector: 'app-enter-bills',
  templateUrl: './enter-bills.component.html',
  styleUrls: ['./enter-bills.component.css']
})

export class EnterBillsComponent {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textoIncorrecto: string;

  constructor(private _presupuestoService: BudgetService) {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textoIncorrecto = 'Nombre o Gasto Incorrecto';
  }

  agregarGastos() {
    if (this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'Cantidad ingresada es mayor al Restante';
      return
    }

    const GASTO = {
      nombre: this.nombreGasto,
      cantidad: this.cantidad
    }

    this._presupuestoService.agregarGasto(GASTO);

    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.formularioIncorrecto = true;
    } else {
      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }
}
