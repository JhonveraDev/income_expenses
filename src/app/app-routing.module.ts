import { BillsComponent } from './components/bills/bills.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { EnterBillsComponent } from './components/bills/enter-bills/enter-bills.component';

const routes: Routes = [
  { path: '', redirectTo: '/ingresar-presupuesto', pathMatch: 'full' },
  { path: 'ingresar-presupuesto', component: EnterBudgetComponent },
  { path: 'gastos', component: BillsComponent },
  { path: '**', redirectTo: '/ingresar-presupuesto', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
