import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/service/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.css']
})
export class EnterBudgetComponent {
  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor(private _budgetService: BudgetService, private router: Router) {
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }

  agregar() {
    if (this.cantidad > 0) {
      this.cantidadIncorrecta = false;
      this._budgetService.presupuesto = this.cantidad;
      this._budgetService.restante = this.cantidad;
      this.router.navigate(['/gastos'])
    } else {
      this.cantidadIncorrecta = true;
    }
  }
}
