import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './components/bills/bills.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';
import { EnterBillsComponent } from './components/bills/enter-bills/enter-bills.component';
import { ListBillsComponent } from './components/bills/list-bills/list-bills.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    EnterBudgetComponent,
    EnterBillsComponent,
    ListBillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
