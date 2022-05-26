import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { Deposit1Component } from './deposit/deposit1/deposit1.component';
import { Deposit2Component } from './deposit/deposit2/deposit2.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {
    path:'balance', component: BalanceComponent
  },{
    path:'deposit', loadChildren: () => import('./deposit/deposit.module').then(r => r.DepositModule)  
  },{
    path:'withdraw', component:WithdrawComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ArrayOfComponents = [BalanceComponent, 
  // Depositc1Component, 
  WithdrawComponent,
  Deposit1Component,
  Deposit2Component,
  // Depositc2Component,
  DepositComponent
]
