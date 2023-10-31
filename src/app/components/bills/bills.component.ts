import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/service/budget.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  presupuesto: number = 0;
  constructor(private _budgetService: BudgetService, private router: Router) {
    this.presupuesto = this._budgetService.presupuesto;
  }

  ngOnInit(): void {
    if (this.presupuesto === 0) {
      this.router.navigate(['/ingresar-presupuesto'])
    }
  }
}
