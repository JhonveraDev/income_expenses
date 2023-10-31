import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/service/budget.service';

@Component({
  selector: 'app-list-bills',
  templateUrl: './list-bills.component.html',
  styleUrls: ['./list-bills.component.css']
})

export class ListBillsComponent implements OnInit, OnDestroy {
  subscription: Subscription
  presupuesto: number;
  restante: number;
  listGastos: any[] = [];

  constructor(private _budgetService: BudgetService) {
    this.presupuesto = 0;
    this.restante = 0;
    this.subscription = this._budgetService.getGastos().subscribe(data => {
      this.restante = this.restante - data.cantidad;
      this.listGastos.push(data);
    })
  }

  ngOnInit(): void {
    this.presupuesto = this._budgetService.presupuesto
    this.restante = this._budgetService.presupuesto;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  aplicarColoRestante() {
    if (this.presupuesto / 4 > this.restante) {
      console.log('reeed')
      return 'alert alert-danger';
    } else if (this.presupuesto / 2 > this.restante) {
      return 'alert alert-warning';
    } else {
      return 'alert alert-secondary'
    }
  }
}
